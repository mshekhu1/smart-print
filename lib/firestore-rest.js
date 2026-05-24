const PROJECT_ID = "smartprintsolutions-e3c12";
const API_KEY =
  process.env.FIREBASE_API_KEY || "AIzaSyBmenAUTU_gcklmfC3F6m3X8kCTAP3KSeg";

function parseValue(field) {
  if (!field) return null;
  if ("stringValue" in field) return field.stringValue;
  if ("integerValue" in field) return Number(field.integerValue);
  if ("doubleValue" in field) return field.doubleValue;
  if ("booleanValue" in field) return field.booleanValue;
  if ("timestampValue" in field) return field.timestampValue;
  if ("nullValue" in field) return null;
  return null;
}

function parseDocument(doc) {
  const id = doc.name.split("/").pop();
  const data = { id };
  for (const [key, field] of Object.entries(doc.fields || {})) {
    data[key] = parseValue(field);
  }
  return data;
}

async function firestoreFetch(path, query = {}) {
  const url = new URL(
    `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${path}`
  );
  url.searchParams.set("key", API_KEY);
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url);
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Firestore ${response.status}: ${text}`);
  }
  return response.json();
}

async function listAllDocuments(collectionPath) {
  const documents = [];
  let pageToken;

  do {
    const query = { pageSize: "100" };
    if (pageToken) query.pageToken = pageToken;
    const data = await firestoreFetch(collectionPath, query);
    if (data?.documents) {
      documents.push(...data.documents.map(parseDocument));
    }
    pageToken = data?.nextPageToken;
  } while (pageToken);

  return documents;
}

async function getQuestionWithAnswers(questionId) {
  const questionData = await firestoreFetch(`questions/${questionId}`);
  if (!questionData) {
    return null;
  }
  const question = parseDocument(questionData);

  const answersData = await listAllDocuments(
    `questions/${questionId}/answers`
  );
  question.answers = answersData.sort(
    (a, b) => new Date(toIsoDate(a.date)) - new Date(toIsoDate(b.date))
  );

  return question;
}

function toIsoDate(value) {
  if (!value) return new Date().toISOString();
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return new Date().toISOString();
  return parsed.toISOString();
}

module.exports = {
  listAllQuestions: () => listAllDocuments("questions"),
  getQuestionWithAnswers,
  toIsoDate,
};

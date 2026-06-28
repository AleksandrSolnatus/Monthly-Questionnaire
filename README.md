# Monthly Questionnaire

A small static interactive questionnaire. It works on GitHub Pages with no build step.

## Edit the Questions

Open `script.js` and edit the `questions` array near the top.

Supported question types:

- `text`
- `choice`
- `slider`
- `ranking`
- `callback`
- `bars`

The current file has 10 sample questions, with the final sample standing in for Question 30.
When the full monthly questionnaire is ready, replace the sample list with 30 questions.

## Run Locally

From this folder:

```sh
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Publish With GitHub Pages

Create a new GitHub repo, then run these commands from this folder:

```sh
git init
git add .
git commit -m "Create monthly questionnaire"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

In GitHub:

1. Open the repo.
2. Go to Settings.
3. Go to Pages.
4. Set Source to `Deploy from a branch`.
5. Choose branch `main` and folder `/root`.
6. Save.

GitHub will give you a public link.

## Response Persistence

Right now answers are saved in the visitor's browser and can be downloaded as JSON.

For live collection, use a Google Sheet plus Apps Script:

1. Create a Google Sheet.
2. Open Extensions > Apps Script.
3. Paste this script:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.name || "",
    JSON.stringify(data.answers || {})
  ]);
  return ContentService.createTextOutput("ok");
}
```

4. Deploy as a Web App.
5. Set access to "Anyone".
6. Copy the Web App URL.
7. Paste it into `script.js` as `submissionEndpoint`.

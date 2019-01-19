const keys = require("../../config/keys");

module.exports = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>${survey.title}</h3>
          <p>Please answer the following question: </p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/yes">Yes</a>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};

/* require this file in 'surveyRoutes.js' file to be used a template. */

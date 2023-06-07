import React from 'react';

function XmlToHtml({xml}) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, 'application/xml');
  const htmlContent = xmlDoc.documentElement.textContent;
  const limitedHtmlContent = htmlContent.slice(0, 500) + '...';

  return (
    <p dangerouslySetInnerHTML={{ __html: limitedHtmlContent }} />
  );
}

export default XmlToHtml;

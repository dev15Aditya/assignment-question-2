function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  let highlightedContent = htmlContent;

  // Iterate through the plainTextPositions array and highlight the corresponding positions in the HTML content
  plainTextPositions.forEach((position) => {
    const { start, end } = position;
    const highlightedText = `<mark>${plainText.substring(start, end)}</mark>`;
    highlightedContent =
      highlightedContent.substring(0, start) +
      highlightedText +
      highlightedContent.substring(end);
  });

  return highlightedContent;
}

function highlightContent() {
  const originalContent = document.getElementById('originalContent').innerHTML;
  const plainText =
    'Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------';
  const plainTextPositions = [
    { start: 0, end: 2 },
    { start: 241, end: 247 },
    { start: 518, end: 525 },
  ];

  const highlightedContent = highlightHTMLContent(
    originalContent,
    plainText,
    plainTextPositions
  );
  document.getElementById('highlightedContent').innerHTML = highlightedContent;
}

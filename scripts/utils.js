export const getQueryParam = (name) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(name);
};

// Helper function to get the condensed browser information
export const getBrowserInfo = () => {
  const browser = navigator.userAgent;
  const condensedBrowser = browser; // Extracting the first two words
  return condensedBrowser;
};

// Helper function to get the condensed current date and time
export const getCurrentDateTime = () => {
  const now = new Date();
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const condensedDateTime = now.toLocaleString('en-US', options);
  return condensedDateTime;
};

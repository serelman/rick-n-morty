export function updateUrlParameter(url: string, param: string, value: string ){
  var regex = new RegExp('('+param+'=)[^\&]+');
  return url.replace( regex , '$1' + value);
}

export const removeDuplicateParams = (str: string) => Array.from(new Set(str.split('&'))).join('&').toString();

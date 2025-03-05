/**
 * 防抖
 * @param {function} func 要进行debounce的函数
 * @param {number} wait 等待时间,默认500ms
 * @param {boolean} immediate 是否立即执行
 */
export function debounce<F extends (...args: any[]) => void>(func: F, wait = 500, immediate = false) {
  let timeout: NodeJS.Timeout | undefined;
  return function (...args: Parameters<F>) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = undefined;
      }, wait);
      if (callNow) {
        func(...args);
      }
    } else {
      timeout = setTimeout(() => func(...args), wait);
    }
  };
}

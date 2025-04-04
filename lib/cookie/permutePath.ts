/**
 * Generates the permutation of all possible values that {@link pathMatch} the `path` parameter.
 * The array is in longest-to-shortest order.  Useful when building custom {@link Store} implementations.
 *
 * @example
 * ```
 * permutePath('/foo/bar/')
 * // ['/foo/bar/', '/foo/bar', '/foo', '/']
 * ```
 *
 * @param path - the path to generate permutations for
 * @public
 */
export function permutePath(path: string): string[] {
  if (path === '/') {
    return ['/']
  }
  let permutations = [path]
  while (path.length > 1) {
    let lindex = path.lastIndexOf('/')
    if (lindex === 0) {
      break
    }
    path = path.slice(0, lindex)
    permutations.push(path)
  }
  permutations.push('/')
  return permutations
}

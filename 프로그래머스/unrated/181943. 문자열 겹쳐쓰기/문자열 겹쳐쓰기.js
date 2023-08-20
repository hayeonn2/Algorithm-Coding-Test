function solution(my_string, overwrite_string, s) {
    const strArr = [...my_string]
    strArr.splice(s, overwrite_string.length, overwrite_string)

    return strArr.join('');
}
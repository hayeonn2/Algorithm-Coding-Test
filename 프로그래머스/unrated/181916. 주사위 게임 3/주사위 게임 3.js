function solution(a, b, c, d) {
    if(a === b && b === c && c === d) return 1111 * a;
    
    const arr = [a, b, c, d].sort();
    
    if(arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[3]) return arr[0];
    
    if(arr[0] === arr[1] && arr[1] !== arr[2] && arr[2] === arr[3]) return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);
    
    let sameCount = 0;
    let sameNumber = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            sameCount++;
            sameNumber = arr[i];
        }
    }
    
    const diffNumber = arr.filter((el)=> el !== sameNumber);
    
    if(sameCount === 1) return diffNumber[0] * diffNumber[1];
    else return (10 * sameNumber + diffNumber[0]) ** 2;
}

/**
 * 너무 단순하게 생각해서 배열에 담지않고 계속 a===b... 이런식으로만 했더니 실패했다.
 * 일단 처음엔 숫자가 모두 같을 때 값을 리턴해준다.
 * 2번째는 숫자를 모두 배열에 담은 후 오름차순 정렬을 한다. 그리고 모두 같지 않을 때의 경우를 리턴해준다.
 * 3번째는 2개씩 같을 때 결과값을 리턴한다.
 * 4번째와 5번째는는 같은 개수와 같은 숫자를 담을 변수를 만들어놓고
 * 반복문을 통해 인덱스를 비교하며 같을때 카운트를 해주고 같은 숫자도 변수에 담아준다.
 * 배열에서 같은 숫자를 필터를 통해 배열에서 빼주고 남은 숫자로 조건문을 통해 결과값을 반환하면 된다.
 */
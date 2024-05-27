document.getElementById('INU').addEventListener('click', function() { // INU 버튼 클릭 시
    fetch('http://localhost:3000/web') // 1-1.FETCH를 통해 서버에 접근
        .then(response => response.json()) // 1-2.접근 성공시 JSON으로 변환
        .then(web => { // 변환된 JSON을 web에 저장
            localStorage.setItem('web', JSON.stringify(web)); // 2.web을 localStorage에 저장
            show(web); // 3.web을 화면에 출력
        })
        .catch(error => console.log('error:', error)); // 1-3.접근 실패시 에러 출력
});

function show(data) { // 저장이 완료된 데이터를 화면에 출력하도록 하는 함수
    const show = document.getElementById('show'); // id가 show인 요소를 찾아 show에 저장
    show.innerHTML = JSON.stringify(data, null, 2); // show에 data를 JSON형식으로 변환하여 저장
}
const loadGender = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => genderData(data))
}

const genderData = data => {
    const fullData = data.results[0];
    console.log(fullData);
    const avater = document.getElementById('avater');
    avater.src = `${fullData.picture.medium}` ;
    const fullName = document.getElementById('name');
    fullName.innerHTML = `Name : ${fullData.name.title} ${fullData.name.first} ${fullData.name.last}`;
    const gender = document.getElementById('gender');
    gender.innerHTML = `Gender : ${fullData.gender}`;
    const age = document.getElementById('age');
    age.innerHTML = `<b>Age</b> : ${fullData.dob.age}`

}

loadGender();
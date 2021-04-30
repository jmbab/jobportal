const jobs = ['software engineer', 'software developer', 'chef', 'banker', 'accountant', 'carpenter']

function createArray(array){
    const list = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        const item = document.createElement('li');

        item.appendChild(document.createTextNode(array[i]));

        list.appendChild(item);
    }

    return list;
}
document.getElementById('alist').appendChild(createArray(jobs[0]));
console.log(jobs)

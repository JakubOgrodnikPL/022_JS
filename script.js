const cars = "Audi,Mercedes,BMW,Nissan,Dodge"
const carray = cars.split(',')
console.log(carray)
if (carray.length > 3) console.log('Jest OK')
else console.log('Nie jest OK')
const check = carray.includes('Audi')
if (check == true) carray.push('Polonez')
else carray.splice(-1)
console.log(carray)
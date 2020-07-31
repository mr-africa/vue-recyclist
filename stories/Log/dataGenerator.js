const messages = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Nullam a pulvinar enim',
    'Integer id est ut ante lacinia tincidunt',
    'Sed id egestas dolor',
    'Suspendisse potenti',
    'Donec quis iaculis urna, nec fringilla ligula',
    'Sed ut libero at risus dapibus commodo eget sit amet ex',
    'Vestibulum pharetra gravida turpis, et tincidunt nunc',
    'Aliquam pellentesque pretium auctor',
    'In efficitur mi vel euismod malesuada',
    'Curabitur mi eros, fermentum vitae ex eu, commodo blandit orci',
    'Donec in lobortis urna, a interdum leo',
    'Vivamus pharetra, felis id malesuada venenatis, j…, sit amet vulputate sapien risus sit amet lectus',
    'Aenean efficitur purus purus, non tempus sem congue et',
    'Nam suscipit tempor convallis',
    'Nullam sit amet nibh ex',
    'Proin at fringilla erat, id porta risus',
    'Nam fringilla, ipsum ac volutpat commodo, est augue finibus justo, a interdum ipsum est ac augue',
    'Suspendisse potenti',
    'Nulla at eros vitae tortor fermentum lobortis et ut augue',
    'Phasellus in ultricies erat',
    'Maecenas vulputate felis et risus dictum placerat',
    'Etiam tristique tellus eu erat congue, eget tristique erat sollicitudin',
    'Etiam molestie velit vitae justo mollis tempus',
    'Praesent eget dui volutpat, consectetur odio in, lobortis nisl',
    'In posuere sagittis nisi',
    'Proin pharetra pellentesque congue',
    'Mauris consectetur ut sapien in finibus',
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
    'Praesent et quam nec arcu auctor posuere quis at ante',
    'Phasellus fermentum, mi et vestibulum tincidunt,…etus laoreet dui, a rhoncus quam felis eget neque',
    'Ut non felis ullamcorper, condimentum nisl vitae, congue turpis',
    'Quisque vestibulum dictum ante, tempus sagittis tortor',
    'Quisque massa ante, aliquet ac diam sit amet, condimentum fringilla sapien',
    'Vestibulum at elit efficitur, mattis mauris et, aliquam augue',
    'Nunc feugiat arcu nec augue laoreet, et dignissim lorem pellentesque',
    'Suspendisse consectetur placerat augue, et porttitor elit suscipit sit amet',
    'Fusce tincidunt rutrum sapien vitae consequat',
    'Morbi eget tempus neque, eget lacinia nibh',
    'Etiam hendrerit sapien nulla, eu tincidunt nulla convallis interdum',
    'Duis ornare urna eget nunc accumsan, vitae lobortis sapien ultricies',
    'Morbi ut lorem dictum, tempor tellus at, facilisis lacus',
    'In elit est, luctus in ex ac, interdum euismod ipsum',
    'Curabitur eget auctor est',
    'In ullamcorper laoreet nunc, in finibus sem tempus vel',
    'Vestibulum ante ipsum primis in faucibus orci luc…e; Cras vitae fringilla orci, eu fringilla turpis',
    'Nam iaculis dolor nec dui commodo imperdiet',
    'Fusce lobortis sem arcu, et pulvinar sem interdum nec',
    'Suspendisse facilisis metus nunc',
    'Duis non nulla neque',
    'Proin eleifend feugiat ligula, at molestie lacus iaculis sed',
    'Vestibulum dui augue, pulvinar sed quam et, commodo lobortis arcu',
]

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

export const getRandomMessages = () => {
    const count = getRandomInt(1, 7)
    const result = []
    for (let i = 0; i < count; i += 1) {
        result.push(messages[getRandomInt(0, messages.length)])
    }
    return Array.from(new Set(result))
}

const now = new Date().getTime()

export const getRandomTime = () => now - (Math.random() * 8000000 + 2000000)

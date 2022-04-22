$(() => {
    $.get('https://kalebwithak.github.io/100BW-UNCC/json/women.json', (data) => {
        const { eBoard } = data

        for (let i = 0; i < eBoard.length; i++) {
            eBoard[i].img = $(`<img src='${eBoard[i].image}' />`)

            displayBio(eBoard[i], $('#container-eBoard'))
        }
    });
});

function displayBio(member, div) {
    console.log(member)
    const card = $('<div>').attr('class', 'card');
    card.append(`
        <h3>${ member.name }</h3>
    `);

    $(div).append(card);
}
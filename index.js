function totalFine(fare) {
    // You have to write your code here

    if (typeof (fare) != 'number' || fare <= 0) {
        return 'Invalid'

    }

    let finePercentage = (20 / 100) * fare

    return fare + finePercentage + 30
}



function onlyCharacter(str) {
    // You have to write your code here

    if (typeof (str) != 'string') {
        return "Invalid"
    }

    if (str.length == 0) {
        return ''
    }


    let modifiedStr = ''


    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            modifiedStr += str[i]
        }


    }


    return modifiedStr.toUpperCase()
}






function bestTeam(player1, player2) {
    // You have to write your code here


    if (typeof (player1) != 'object' || typeof (player2) != 'object') {
        return "Invalid"
    }
    let player1Score = player1.foul + player1.cardY + player1.cardR
    let player2Score = player2.foul + player2.cardY + player2.cardR

    if (player1Score < player2Score) {

        return player1.name

    } else if (player1Score == player2Score) {

        return "Tie"

    } else {

        return player2.name

    }


}









function isSame(arr1, arr2) {
    // You have to write your code here

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid"
    }

    if (arr1.length != arr2.length) {
        return false
    }


    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true

}





function resultReport(marks) {
    // You have to write your code here

    if (!Array.isArray(marks)) {
        return "Invalid"
    }

    // When a Number divided by 0 its give us mathematically undefined and therefore returns NaN.



    let result = {
        finalScore: 0,
        pass: 0,
        fail: 0
    }

    if (marks.length == 0) {
        return result
    }


    for (mark of marks) {
        result.finalScore += mark
        if (mark < 40) {
            result.fail += 1
        } else if (mark >= 40) {
            result.pass += 1
        }

    }
    result.finalScore = Math.round(result.finalScore / marks.length)
    return result



}





// UI Interaction Functions



function showActions(sectionId) {
    document.getElementById(sectionId).style.display = 'flex';
}






// Fine Calculation 

function calculateFine() {

    const input = document.getElementById('fareInput').value;

    const fare = parseFloat(input);

    const result = totalFine(fare)

    document.getElementById('fineResult').textContent = result === 'Invalid' ? 'Invalid input' : result

    showActions('fineActions');
}


function resetFine() {


    document.getElementById('fareInput').value = '';


    document.getElementById('fineResult').textContent = '-';

    document.getElementById('fineActions').style.display = 'none';
}





// String Processign

function processString() {
    const input = document.getElementById('stringInput').value

    const result = onlyCharacter(input);
    document.getElementById('stringResult').textContent = result === 'Invalid' ? 'Invalid input' : result

    showActions('stringActions');
}




function resetString() {


    document.getElementById('stringInput').value = '';

    document.getElementById('stringResult').textContent = '-'

    document.getElementById('stringActions').style.display = 'none';
}






// Campare Teams



function compareTeams() {
    const team1 = {
        name: document.getElementById('team1Name').value,

        foul: parseInt(document.getElementById('team1Foul').value),
        cardY: parseInt(document.getElementById('team1Yellow').value),

        cardR: parseInt(document.getElementById('team1Red').value)
    };
    const team2 = {
        name: document.getElementById('team2Name').value,
        foul: parseInt(document.getElementById('team2Foul').value),


        cardY: parseInt(document.getElementById('team2Yellow').value),
        cardR: parseInt(document.getElementById('team2Red').value)
    };
    const result = bestTeam(team1, team2);


    document.getElementById('teamResult').textContent = result === 'Invalid' ? 'Invalid team data' : result;

    showActions('teamActions');
}







function resetTeams() {
    document.getElementById('team1Name').value = 'Team A';
    document.getElementById('team1Foul').value = '';

    document.getElementById('team1Yellow').value = ''

    document.getElementById('team1Red').value = '0';
    document.getElementById('team2Name').value = 'Team B'

    document.getElementById('team2Foul').value = '';
    document.getElementById('team2Yellow').value = '';
    document.getElementById('team2Red').value = ''

    document.getElementById('teamResult').textContent = '-';


    document.getElementById('teamActions').style.display = 'none';
}





// Compare Arrays


function compareArrays() {

    const array1Str = document.getElementById('array1Input').value;

    const array2Str = document.getElementById('array2Input').value

    const array1 = array1Str.split(',').map(item => item.trim());

    const array2 = array2Str.split(',').map(item => item.trim())

    const result = isSame(array1, array2);
    document.getElementById('arrayResult').textContent =

        result === 'Invalid' ? 'Invalid array input' :

            result ? 'Arrays are identical' : 'Arrays are different';

    showActions('arrayActions');
}





function resetArrays() {
    document.getElementById('array1Input').value = ''
    document.getElementById('array2Input').value = '';



    document.getElementById('arrayResult').textContent = '-'

    document.getElementById('arrayActions').style.display = 'none';
}





// AnaLyze Marks





function analyzeMarks() {
    const marksInput = document.getElementById('marksInput').value;

    const marksArray = marksInput.split(',').map(item => {

        const num = parseFloat(item.trim());

        return isNaN(num) ? null : num;
    });

    if (marksArray.some(item => item === null)) {
        document.getElementById('marksResult').textContent = 'Invalid marks input';

        document.getElementById('marksDetails').classList.add('hidden');

        return;
    }






    const result = resultReport(marksArray);
    document.getElementById('marksResult').textContent = 'Analysis complete';

    document.getElementById('marksDetails').classList.remove('hidden')

    document.getElementById('avgScore').textContent = result.finalScore

    document.getElementById('passedCount').textContent = result.pass;
    document.getElementById('failedCount').textContent = result.fail

    showActions('marksActions');

}





function resetMarks() {

    document.getElementById('marksInput').value = '';
    document.getElementById('marksResult').textContent = '-'

    document.getElementById('marksDetails').classList.add('hidden');

    document.getElementById('marksActions').style.display = 'none';
}








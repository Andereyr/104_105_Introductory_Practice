
// Задача 1
{
    const age = 16;
    const height = 145;

    if (age < 8) {
        console.log("Вход запрещен, слишком мал");
    } else if (age >= 8 && age <= 18 && height < 140) {
        console.log("Вход только с родителями");
    } else if (age > 18 || (height > 140 && age > 8)) {
        console.log("Добро пожаловать на аттракцион!");
    }
}

// Задача 2
{
    let sum = 0;

    for (let i = 1; i <= 200; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            sum = sum + i;
        }
    }

    console.log(sum);
}

// Задача 3
{
    for (let i = 15; i >= 1; i--) {
        if (i % 2 === 0) {
            console.log(i);
        } else {
            console.log(i * 2);
        }
    }
}

// Задача 4
{
    let amount = 10000;
    const rate = 0.08;

    for (let year = 1; year <= 10; year++) {
        amount = amount + amount * rate;
    }

    console.log(amount);
}

// Задача 5
{
    let ladder = "";

    for (let i = 1; i <= 6; i++) {
        ladder = ladder + "#";
        console.log(ladder);
    }
}

// Задача 6
{
    for (let impulse = 1; impulse <= 50; impulse++) {
        if (impulse % 4 === 0 && impulse % 7 === 0) {
            console.log("BeepBoop");
        } else if (impulse % 4 === 0) {
            console.log("Beep");
        } else if (impulse % 7 === 0) {
            console.log("Boop");
        } else {
            console.log(impulse);
        }
    }
}

// Задача 7
{
    let n = 27;

    for (let step = 1; step <= 15; step++) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }

        console.log(n);
    }
}

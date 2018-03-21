function get_achievement(points) {

    let perfectScore = 100 * points.length;
    let sum = points.reduce(function(sum, next) { return sum + next }, 0);

    if (sum >= perfectScore * 0.8) {
        return "A";
    }
    else if (sum >= perfectScore * 0.6) {
        return "B";
    }
    else if (sum >= perfectScore * 0.4) {
        return "C";
    }
    else {
        return "D";
    }

};

function get_pass_or_failure(points) {
    let judge = "合格";
    for (let i = 0; i < points.length; i++) {
        if (points[i] < 60) {
            judge = "不合格";
            break;
        }
    }

    return judge;
};

function judgement(points) {
    let achievement = get_achievement(points);
    let pass_or_failure = get_pass_or_failure(points);

    return `あなたの成績は${achievement}です。${pass_or_failure}です！`;
};


let points = [50, 100, 80, 80, 70, 80];
console.log(judgement(points));
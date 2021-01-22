function kilometerToMeter(kilometer) {
    if (Math.sign(kilometer) == -1) {
        return 'value can not be negetive';
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}




function budgetCalculator(watch, phone, laptop) {
    if (Math.sign(watch) == 1 && Math.sign(phone) == 1 && Math.sign(laptop) == 1) {
        var totalPrice = watch * 50 + phone * 100 + laptop * 500;
        return totalPrice;
    }
    else {
        return 'value can not be negetive';
    }
}


function hotelCost(day) {
    switch (Math.sign(day)) {
        case 1:
            if (day <= 10) {
                totalCost = day * 100;
                return totalCost;

            }
            else if (day <= 20) {
                firstTenDaysCost = 10 * 100;
                remainingDays = day - 10;
                remainingDaysCost = remainingDays * 80;
                totalCost = firstTenDaysCost + remainingDaysCost;
                return totalCost;


            }
            else {
                firstTenDaysCost = 10 * 100;
                secondTenDaysCost = 10 * 80;
                remainingDays = day - 20;
                remainingDaysCost = remainingDays * 50;
                totalCost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost;
                return totalCost;

            }
        case -1:
            return 'value can not be negetive';
        default:
            return 'value can not be zero';
    }
}


function megaFriend(nameArray) {
    if (nameArray.length == 0) {
        return 'Array can not be empty';
    }
    else {
        var largestFriendName = nameArray[0];
        for (var i = 0; i < nameArray.length; i++) {
            var friendName = nameArray[i];
            if (friendName.length > largestFriendName.length) {
                largestFriendName = friendName;
            }
        }
        return largestFriendName;
    }
}

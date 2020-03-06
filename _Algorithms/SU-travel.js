function travel(budget, season) {
    if (budget > 1000) {
        //Europe
        //90% от бюджета
        return budget * 90 / 100;
    } else if (budget > 100 && budget < 1000) {
        return season === 'summer' ? budget * (40 / 100) : budget * (80 / 100);
        //balkans
        // Лято – 40% от бюджета.
        // Зима – 80% от бюджета.
    } else {
        return season === 'summer' ? budget * (30 / 100) : budget * (70 / 100);
        // Лято – 30% от бюджета.
        // Зима – 70% от бюджета.
    }
}

console.log(travel(1500, "summer"))
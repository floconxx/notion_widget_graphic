function generateRandomData(count) {
  return Array.from({ length: count }, () =>
    Math.floor(Math.random() * 100)
  );
}

const labels = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
const data = generateRandomData(labels.length);

// Récupère le canvas du HTML
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line", // bar, pie, doughnut, radar...
  data: {
    labels: labels,
    datasets: [
      {
        label: "Données aléatoires",
        data: data,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true, // Adapter le graphique à la taille du conteneur
    plugins: {
      legend: {
        display: true
      }
    }
  }
});

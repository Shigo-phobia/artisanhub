<script>
document.getElementById('headerSearchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get the search query
    const query = document.getElementById('headerSearchQuery').value.toLowerCase();
  
    // Simulate search logic (Replace this with real data)
    const data = [
      { name: "John Doe", job: "Painter" },
      { name: "Jane Smith", job: "Plumber" }
    ];
  
    const results = data.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.job.toLowerCase().includes(query)
    );
  
    console.log("Search Results:", results);
  });
</script>


    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('collapsed');
    }
  

  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const logoAudioWrapper = document.getElementById("logo-audio-wrapper");

    // Toggle the sidebar's "collapsed" class
    sidebar.classList.toggle("collapsed");

    // Hide or show the logo + audio based on sidebar state
    if (!sidebar.classList.contains("collapsed")) {
      // Sidebar is open → hide logo and audio
      logoAudioWrapper.classList.add("hidden");
    } else {
      // Sidebar is collapsed → show them
      logoAudioWrapper.classList.remove("hidden");
    }
  }

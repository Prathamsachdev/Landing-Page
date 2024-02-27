// ScrollReveal().reveal('.body', {duration: 2000});

ScrollReveal({
    // reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
  
  ScrollReveal().reveal(".left,.adv_title, .cd_title, .team_title, .login_title", { origin: "top" });
  ScrollReveal().reveal(".right,.about, .login",{ origin: "bottom" });
  ScrollReveal().reveal(".adv_left, .cd_left, .team_left" , { origin: "left" });
  ScrollReveal().reveal(".adv_right, .cd_right, .team_right", {origin: 'right'});
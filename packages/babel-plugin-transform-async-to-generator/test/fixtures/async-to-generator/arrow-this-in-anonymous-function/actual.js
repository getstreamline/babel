function f() {
  g(async function() {
    c(() => this);
  });
}

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section id="home" class="hero">
            <main>
                <div class="hero-content">
                    <div class="description">
                    <h2 class="title">Hai, Selamat Datang di Foodys!</h2>
                    <p>Disini kamu bisa memilih beberapa restoran ternama yang telah kami rekomendasikan, khusus untuk anda yang
                        mengakses website ini.</p>
                    <a href="#main-content"><button>Lebih Lanjut</button></a>
                    </div>
                </div>
            </main>
        </section>
    `;
  }
}

customElements.define('hero-section', Hero);

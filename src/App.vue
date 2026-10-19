<template>
  <div class="min-h-screen bg-paper text-black font-sans">

    <!-- ================= 1. ANNOUNCEMENT BAR ================= -->
    <div class="bg-black text-white text-center text-xs font-bold uppercase tracking-widest py-2 px-4">
      Free shipping on orders over $30
    </div>

    <!-- ================= 2. NAVBAR ================= -->
    <NavHeader />

    <main id="top">

      <!-- ================= 3. HERO ================= -->
      <section class="bg-brand border-b-4 border-black">
        <div class="max-w-6xl mx-auto px-6 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p class="inline-block bg-black text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1 mb-5">
              New drop · Season 01</p>
            <h1 class="text-5xl sm:text-6xl font-black uppercase leading-none text-white">
              Merch for people who ship code.
            </h1>
            <p class="mt-5 max-w-md text-lg font-bold text-white">
              Stickers, hoodies and desk gear. Thick borders. Hard shadows. No blur.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <a href="#products"
                class="bg-white border-4 border-black shadow-brutal px-6 py-3 font-extrabold uppercase hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                Shop now
              </a>
              <a href="#about"
                class="bg-black text-white border-4 border-black shadow-brutal px-6 py-3 font-extrabold uppercase hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
                Learn more
              </a>
            </div>
          </div>

          <!-- 3b. STAT BOXES (3 copies of the same box) -->
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-white border-4 border-black shadow-brutal p-4 text-center">
              <p class="text-4xl font-black">12</p>
              <p class="text-xs font-extrabold uppercase mt-1">Products</p>
            </div>
            <div class="bg-white border-4 border-black shadow-brutal p-4 text-center">
              <p class="text-4xl font-black">24h</p>
              <p class="text-xs font-extrabold uppercase mt-1">Shipping</p>
            </div>
            <div class="bg-white border-4 border-black shadow-brutal p-4 text-center">
              <p class="text-4xl font-black">0px</p>
              <p class="text-xs font-extrabold uppercase mt-1">Blur</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= 4. FILTER BAR ================= -->
      <section id="products" class="max-w-6xl mx-auto px-6 pt-14">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-4 h-4 bg-brand border-2 border-black"></div>
          <h2 class="text-2xl font-black uppercase">Shop</h2>
        </div>

        <div class="bg-white border-4 border-black shadow-brutal p-4 flex flex-wrap items-center gap-4">
          <input type="text" placeholder="Search products..."
            class="flex-1 min-w-48 border-2 border-black bg-paper px-3 py-2 font-bold focus:outline-none focus:bg-white">

          <!-- 4b. CATEGORY BUTTONS (4 copies, one is "active") -->
          <div class="flex flex-wrap gap-2">
            <button
              class="border-2 border-black bg-black text-white px-3 py-2 text-sm font-extrabold uppercase cursor-pointer">All</button>
            <button
              class="border-2 border-black bg-white px-3 py-2 text-sm font-extrabold uppercase cursor-pointer hover:bg-paper">Stickers</button>
            <button
              class="border-2 border-black bg-white px-3 py-2 text-sm font-extrabold uppercase cursor-pointer hover:bg-paper">Apparel</button>
            <button
              class="border-2 border-black bg-white px-3 py-2 text-sm font-extrabold uppercase cursor-pointer hover:bg-paper">Desk</button>
          </div>
        </div>

        <p class="mt-4 text-sm font-bold uppercase">Showing 8 of 12 products</p>
      </section>

      <!-- ================= 5. PRODUCT GRID (8 copies of the same card) ================= -->
      <section class="max-w-6xl mx-auto px-6 py-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <!-- Product 1 · Stickers -->
          <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
            <div class="relative h-36 bg-brand text-white border-b-4 border-black flex items-end p-3">
              <span class="text-6xl font-black leading-none">01</span>
            </div>
            <div class="p-4 flex flex-col gap-2 grow">
              <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Stickers</span>
              <h3 class="text-lg font-black uppercase leading-tight">Semicolon Sticker Pack</h3>
              <p class="text-sm font-medium">10 vinyl stickers for your laptop.</p>
              <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                <p class="text-xl font-black">$4.00</p>
                <div class="flex gap-2">
                  <button
                    class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                  <button
                    class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                </div>
              </div>
            </div>
          </article>

          <!-- Product 2 · Apparel · SALE -->
          <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
            <div class="relative h-36 bg-black text-white border-b-4 border-black flex items-end p-3">
              <span class="text-6xl font-black leading-none">02</span>
              <span
                class="absolute top-3 right-3 bg-brand text-white border-2 border-white text-xs font-extrabold uppercase px-2 py-1">Sale</span>
            </div>
            <div class="p-4 flex flex-col gap-2 grow">
              <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Apparel</span>
              <h3 class="text-lg font-black uppercase leading-tight">Bug Hunter Hoodie</h3>
              <p class="text-sm font-medium">Heavy cotton. Warm for late-night fixes.</p>
              <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                <p class="text-xl font-black">$45.00 <span
                    class="text-sm font-bold line-through text-black/50">$60.00</span></p>
                <div class="flex gap-2">
                  <button
                    class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                  <button
                    class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                </div>
              </div>
            </div>
          </article>

          <!-- Product 3 · Desk · SAVED -->
          <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
            <div class="relative h-36 bg-white text-black border-b-4 border-black flex items-end p-3">
              <span class="text-6xl font-black leading-none">03</span>
            </div>
            <div class="p-4 flex flex-col gap-2 grow">
              <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Desk</span>
              <h3 class="text-lg font-black uppercase leading-tight">Git Push Mug</h3>
              <p class="text-sm font-medium">Holds 350ml of coffee. Force push not included.</p>
              <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                <p class="text-xl font-black">$12.00</p>
                <div class="flex gap-2">
                  <button
                    class="border-2 border-black bg-black text-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Saved</button>
                  <button
                    class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                </div>
              </div>
            </div>
          </article>

          <!-- Product 4 · Apparel -->
          <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
            <div class="relative h-36 bg-black text-white border-b-4 border-black flex items-end p-3">
              <span class="text-6xl font-black leading-none">04</span>
            </div>
            <div class="p-4 flex flex-col gap-2 grow">
              <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Apparel</span>
              <h3 class="text-lg font-black uppercase leading-tight">Dark Mode Tee</h3>
              <p class="text-sm font-medium">100% black. Easy on the eyes.</p>
              <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                <p class="text-xl font-black">$22.00</p>
                <div class="flex gap-2">
                  <button
                    class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                  <button
                    class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                </div>
              </div>
            </div>
          </article>

          <!-- Product 5 · Desk -->
          <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
            <div class="relative h-36 bg-white text-black border-b-4 border-black flex items-end p-3">
              <span class="text-6xl font-black leading-none">05</span>
            </div>
            <div class="p-4 flex flex-col gap-2 grow">
              <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Desk</span>
              <h3 class="text-lg font-black uppercase leading-tight">Ctrl+Z Mousepad</h3>
              <p class="text-sm font-medium">Large size. Undo your mistakes in style.</p>
              <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                <p class="text-xl font-black">$15.00</p>
                <div class="flex gap-2">
                  <button
                    class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                  <button
                    class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                </div>
              </div>
            </div>
          </article>

          <!-- Product 6 · Stickers -->
          <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
            <div class="relative h-36 bg-brand text-white border-b-4 border-black flex items-end p-3">
              <span class="text-6xl font-black leading-none">06</span>
            </div>
            <div class="p-4 flex flex-col gap-2 grow">
              <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Stickers</span>
              <h3 class="text-lg font-black uppercase leading-tight">Component Pin</h3>
              <p class="text-sm font-medium">Metal pin. Small, reusable, and clean.</p>
              <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                <p class="text-xl font-black">$3.50</p>
                <div class="flex gap-2">
                  <button
                    class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                  <button
                    class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                </div>
              </div>
            </div>
          </article>

          <!-- Product 7 · Desk · SOLD OUT -->
          <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
            <div class="relative h-36 bg-white text-black border-b-4 border-black flex items-end p-3">
              <span class="text-6xl font-black leading-none">07</span>
              <span class="absolute top-3 right-3 bg-black text-white text-xs font-extrabold uppercase px-2 py-1">Sold
                out</span>
            </div>
            <div class="p-4 flex flex-col gap-2 grow">
              <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Desk</span>
              <h3 class="text-lg font-black uppercase leading-tight">404 Notebook</h3>
              <p class="text-sm font-medium">Blank pages. Page not found.</p>
              <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                <p class="text-xl font-black">$9.00</p>
                <div class="flex gap-2">
                  <button
                    class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                  <button disabled
                    class="border-2 border-black bg-paper text-black/40 px-3 py-2 text-xs font-extrabold uppercase cursor-not-allowed">Add</button>
                </div>
              </div>
            </div>
          </article>

          <!-- Product 8 · Desk · SALE -->
          <article class="bg-white border-4 border-black shadow-brutal flex flex-col">
            <div class="relative h-36 bg-white text-black border-b-4 border-black flex items-end p-3">
              <span class="text-6xl font-black leading-none">08</span>
              <span
                class="absolute top-3 right-3 bg-brand text-white border-2 border-black text-xs font-extrabold uppercase px-2 py-1">Sale</span>
            </div>
            <div class="p-4 flex flex-col gap-2 grow">
              <span class="self-start border-2 border-black text-xs font-bold uppercase px-2 py-0.5">Desk</span>
              <h3 class="text-lg font-black uppercase leading-tight">Rubber Duck Debugger</h3>
              <p class="text-sm font-medium">Explain your bug to the duck. It always helps.</p>
              <div class="mt-auto pt-3 flex items-center justify-between gap-2">
                <p class="text-xl font-black">$8.00 <span
                    class="text-sm font-bold line-through text-black/50">$10.00</span></p>
                <div class="flex gap-2">
                  <button
                    class="border-2 border-black bg-white px-2 py-2 text-xs font-extrabold uppercase cursor-pointer">Save</button>
                  <button
                    class="border-2 border-black bg-brand text-white shadow-brutal-sm px-3 py-2 text-xs font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Add</button>
                </div>
              </div>
            </div>
          </article>

        </div>

        <!-- 5b. EMPTY STATE (hidden now — show it when a search finds nothing) -->
        <p class="hidden mt-6 bg-white border-4 border-black shadow-brutal p-6 text-center font-extrabold uppercase">
          No products match your search.
        </p>
      </section>

      <!-- ================= 6. CART ================= -->
      <section id="cart" class="max-w-3xl mx-auto px-6 py-14">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-4 h-4 bg-brand border-2 border-black"></div>
          <h2 class="text-2xl font-black uppercase">Your cart (4 items)</h2>
        </div>

        <div class="bg-white border-4 border-black shadow-brutal p-5">
          <ul class="space-y-3">
            <!-- 6a. CART ROWS (3 copies) -->
            <li class="flex items-center justify-between gap-3 border-2 border-black bg-paper p-3">
              <div>
                <p class="text-sm font-extrabold uppercase">Semicolon Sticker Pack</p>
                <p class="text-xs font-medium">$4.00 × 2</p>
              </div>
              <div class="flex items-center gap-3">
                <p class="font-black">$8.00</p>
                <button
                  class="border-2 border-black bg-white px-2 py-1 text-xs font-extrabold uppercase cursor-pointer hover:bg-brand hover:text-white">Remove</button>
              </div>
            </li>
            <li class="flex items-center justify-between gap-3 border-2 border-black bg-paper p-3">
              <div>
                <p class="text-sm font-extrabold uppercase">Git Push Mug</p>
                <p class="text-xs font-medium">$12.00 × 1</p>
              </div>
              <div class="flex items-center gap-3">
                <p class="font-black">$12.00</p>
                <button
                  class="border-2 border-black bg-white px-2 py-1 text-xs font-extrabold uppercase cursor-pointer hover:bg-brand hover:text-white">Remove</button>
              </div>
            </li>
            <li class="flex items-center justify-between gap-3 border-2 border-black bg-paper p-3">
              <div>
                <p class="text-sm font-extrabold uppercase">Dark Mode Tee</p>
                <p class="text-xs font-medium">$22.00 × 1</p>
              </div>
              <div class="flex items-center gap-3">
                <p class="font-black">$22.00</p>
                <button
                  class="border-2 border-black bg-white px-2 py-1 text-xs font-extrabold uppercase cursor-pointer hover:bg-brand hover:text-white">Remove</button>
              </div>
            </li>
          </ul>

          <!-- 6b. EMPTY CART (hidden now — show it when the cart has no rows) -->
          <p class="hidden border-2 border-black bg-paper p-4 text-center font-extrabold uppercase">Your cart is empty.
          </p>

          <div class="mt-5 pt-5 border-t-4 border-black flex flex-wrap items-center justify-between gap-4">
            <p class="text-2xl font-black uppercase">Total: $42.00</p>
            <div class="flex gap-3">
              <button
                class="border-2 border-black bg-white px-4 py-2 text-sm font-extrabold uppercase cursor-pointer">Clear</button>
              <button
                class="border-2 border-black bg-brand text-white shadow-brutal-sm px-4 py-2 text-sm font-extrabold uppercase cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">Checkout</button>
            </div>
          </div>
        </div>
      </section>

      <!-- ================= 7. PERKS (3 copies of the same box) ================= -->

      <PerkSection />

      <!-- ================= 8. FAQ (4 copies of the same item) ================= -->
      <section class="max-w-3xl mx-auto px-6 py-14">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-4 h-4 bg-brand border-2 border-black"></div>
          <h2 class="text-2xl font-black uppercase">FAQ</h2>
        </div>
        <div class="space-y-4">
          <div class="bg-white border-4 border-black shadow-brutal-sm p-4">
            <h3 class="font-extrabold uppercase">How long is shipping?</h3>
            <p class="mt-1 text-sm font-medium">We ship in 24 hours. Delivery takes 3 to 7 days.</p>
          </div>
          <div class="bg-white border-4 border-black shadow-brutal-sm p-4">
            <h3 class="font-extrabold uppercase">Can I return an item?</h3>
            <p class="mt-1 text-sm font-medium">Yes. You have 30 days. The item must be unused.</p>
          </div>
          <div class="bg-white border-4 border-black shadow-brutal-sm p-4">
            <h3 class="font-extrabold uppercase">Do you ship worldwide?</h3>
            <p class="mt-1 text-sm font-medium">Yes, to most countries. Prices change by country.</p>
          </div>
          <div class="bg-white border-4 border-black shadow-brutal-sm p-4">
            <h3 class="font-extrabold uppercase">Which sizes do you have?</h3>
            <p class="mt-1 text-sm font-medium">Apparel comes in S, M, L and XL.</p>
          </div>
        </div>
      </section>

      <!-- ================= 9. NEWSLETTER ================= -->
      <section class="bg-brand border-y-4 border-black">
        <div class="max-w-3xl mx-auto px-6 py-14 text-center">
          <h2 class="text-3xl font-black uppercase text-white">Get the next drop first</h2>
          <p class="mt-2 font-bold text-white">One email per month. No spam.</p>
          <form class="mt-6 flex flex-wrap justify-center gap-3">
            <input type="email" placeholder="you@email.com"
              class="flex-1 min-w-56 max-w-sm border-4 border-black bg-white px-4 py-3 font-bold focus:outline-none">
            <button type="submit"
              class="border-4 border-black bg-black text-white shadow-brutal px-6 py-3 font-extrabold uppercase cursor-pointer hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </main>

    <!-- ================= 10. FOOTER (3 columns, each with a list of links) ================= -->
    <footer class="bg-white">
      <div class="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p class="text-2xl font-black uppercase">Brutal<span
              class="bg-brand text-white px-2 ml-1 border-2 border-black">Merch</span></p>
          <p class="mt-3 text-sm font-medium">A practice project from TFD. Not a real shop.</p>
        </div>
        <div>
          <h3 class="text-sm font-black uppercase mb-3 border-b-4 border-black pb-1">Shop</h3>
          <ul class="space-y-2 text-sm font-bold">
            <li><a href="#products" class="hover:underline">All products</a></li>
            <li><a href="#products" class="hover:underline">Stickers</a></li>
            <li><a href="#products" class="hover:underline">Apparel</a></li>
            <li><a href="#products" class="hover:underline">Desk</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-black uppercase mb-3 border-b-4 border-black pb-1">Help</h3>
          <ul class="space-y-2 text-sm font-bold">
            <li><a href="#about" class="hover:underline">Shipping</a></li>
            <li><a href="#about" class="hover:underline">Returns</a></li>
            <li><a href="#about" class="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-black uppercase mb-3 border-b-4 border-black pb-1">Follow</h3>
          <ul class="space-y-2 text-sm font-bold">
            <li><a href="#top" class="hover:underline">Telegram</a></li>
            <li><a href="#top" class="hover:underline">Facebook</a></li>
            <li><a href="#top" class="hover:underline">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div class="bg-black text-white text-center text-xs font-bold uppercase tracking-widest py-3">
        © 2026 Brutal Merch · Built by students at TFD
      </div>
    </footer>

  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader.vue'
import PerkSection from '@/components/PerkSection.vue';
export default {
  components: {
    NavHeader,
    PerkSection
  },
  data() {
    return {
      message: 'You did it 2!',
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
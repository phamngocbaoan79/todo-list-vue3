<template>
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <header class="header flex justify-between items-center">
            <div class="header__logo md:flex md:items-center md:gap-12">
                <a href="#" class="text-lg flex font-semibold">
                    <span>Code CTN</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 block ml-1 text-teal-600 translate-y-[3px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                </a>
            </div>
            <div class="hidden md:block">
                <nav aria-label="Global" class="header__navbar">
                    <ul class="header__list flex items-center gap-5 text-md">
                        <li class="header__item">Product</li>
                        <li class="header__item">Feature</li>
                        <li class="header__item">Marketplace</li>
                        <li class="header__item">Company</li>
                    </ul>
                </nav>
            </div>
            <div class="header__auth">
                <span>
                    Log in
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </span>
            </div>
        </header>
    </div>
</template>

<script setup>

</script>
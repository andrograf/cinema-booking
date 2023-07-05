<template>
    <div>
        <header>
            <NuxtLink to="/"><h1>Cinema</h1></NuxtLink>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/login">Login</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/signup">Signup</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
    <div>
        <slot/>
    </div>
</template>
<style scoped>
.router-link-exact-active {
    color: rgb(255, 153, 0);
  }
  </style>
<template>
    <div>
        <form action="post">
            <label for="id">Email</label>
            <input id="id" type="email" required/>
            <label for="password">Password</label>
            <input id="password" type="password" minlength="4" required/>
            <button type="submit">Send</button>
        </form>
    </div>
</template>
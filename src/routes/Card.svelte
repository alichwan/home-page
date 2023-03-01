<script>
    export let title;
    export let side;
    export let theme = "light";
</script>

<div class="card {side} {theme}">
        <h3>{title}</h3>
        <p>
            <slot />
        </p>
</div>

<style>
    .card {
        margin: 10px;
        background-color: rgba(100%, 100%, 100%, 0.3);
        padding: 10px 0;
        border-radius: 25px;
    }

    h3 {
        margin: 10px 0 0 30px;
    }

    p {
        margin: 10px 30px;
    }

    .dark {
        background-color: rgba(35, 35, 35, 0.614);
        color: white;
    }

    @media (min-width: 720px) {
        .left {
                margin-right: 30%;
            }

        .right {
                margin-left: 30%;
            }
    }

</style>
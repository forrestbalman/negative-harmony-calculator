<script>
    import Article from "$lib/article.svelte";
    import { keys } from "$lib/negative-harmony.js";
    let modality, root, accidental, combinedTonic, major, minor, positive, negative;

    $: {
        if (modality && root && accidental) {
            combinedTonic = root + accidental;
            if (combinedTonic[combinedTonic.length - 1] === "n") combinedTonic = combinedTonic.slice(0, -1);
            major = $keys.find((key) => key.tonic === combinedTonic).major;
            minor = $keys.find((key) => key.tonic === combinedTonic).minor;
        }
    }

    function generateNegative() {
        let c;

        if (modality === "major") {
            let i = minor.length - major.indexOf(positive);
            if (i === minor.length) c = minor[0];
            else c = minor[minor.length - major.indexOf(positive)];
        } else {
            let i = major.length - minor.indexOf(positive);
            if (i === major.length) c = major[0];
            else c = major[major.length - minor.indexOf(positive)];
        }

        if (c && c.includes("f")) c.replace("f", "bb");

        negative = c || undefined;
    }
</script>

<title>Negative Harmony Calculator</title>
<div class="bg">
    <div class="spacer-xs" />
    <section>
        <div class="container text-light">
            <div class="d-flex align-items-center flex-column">
                <h1 class="display-3 fw-medium">Negative Harmony Calculator</h1>
                <p class="fs-4">Input the key, then input the chord you'd like translated to it's negative form.</p>
            </div>
            <hr />
            <div class="row justify-content-center">
                <div id="root" class="col-auto">
                    <h2 class="text-center">Tonic</h2>
                    <select class="fs-3 form-select form-select-lg mb-3" aria-label="Choose a key" bind:value={root}>
                        <option />
                        {#each $keys as { tonic }}
                            {#if !tonic.includes("#") && !tonic.includes("b")}
                                <option value={tonic}>{tonic}</option>
                            {/if}
                        {/each}
                    </select>
                </div>
                <div id="accidental" class="col-auto">
                    <h2 class="text-center">♮/♯/♭</h2>
                    <select class="fs-3 form-select form-select-lg mb-3" aria-label="Choose a key" bind:value={accidental}>
                        <option />
                        <option value="n">♮</option>
                        <option value="#">♯</option>
                        <option value="b">♭</option>
                    </select>
                </div>
                <div id="modality" class="col-auto">
                    <h2 class="text-center">Modality</h2>
                    <select class="fs-3 form-select form-select-lg mb-3" aria-label="Choose a modality" bind:value={modality}>
                        <option />
                        <option value="major">Major</option>
                        <option value="minor">minor</option>
                    </select>
                </div>
                <div id="chords" class="col-auto">
                    <h2 class="text-center">Chord</h2>
                    <select disabled={!modality || !root || !accidental} class="fs-3 form-select form-select-lg mb-3" aria-label="Choose a chord" bind:value={positive} on:change={() => generateNegative()}>
                        {#if major || minor}
                            <option />
                            {#if modality === "major"}
                                {#each major as chord}
                                    {#if chord.includes("f")}
                                        <option value={chord}>{chord.replace("f", "bb")}</option>
                                    {:else}
                                        <option value={chord}>{chord}</option>
                                    {/if}
                                {/each}
                            {:else}
                                {#each minor as chord}
                                    {#if chord.includes("f")}
                                        <option value={chord}>{chord.replace("f", "bb")}</option>
                                    {:else}
                                        <option value={chord}>{chord}</option>
                                    {/if}
                                {/each}
                            {/if}
                        {/if}
                    </select>
                </div>
            </div>
            <div class="text-center {negative !== undefined ? 'visible' : 'invisible'}">
                <h2 class="fs-4 text-decoration-underline">Negative Harmony</h2>
                <h3 class="fs-1">{negative}</h3>
            </div>
            <hr />
        </div>
    </section>
    <Article />
    <div class="spacer-xs" />
</div>

<style>
    .bg {
        background: linear-gradient(270deg, #110d21, #1b003b, #1e1c1f);
        background-size: 600% 601%;
        -webkit-animation: gradient 14s ease infinite;
        -moz-animation: gradient 14s ease infinite;
        -o-animation: gradient 14s ease infinite;
        animation: gradient 14s ease infinite;
    }
</style>

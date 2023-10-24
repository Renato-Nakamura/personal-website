<template>
    <section id="web-development"
        class="relative overflow-hidden snap-center bg-gray-100 bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
        <NewSection />

        <section class="main max-w-7xl pb-40 pt-32 mx-auto">
            <div class="space-y-40" v-for="project in projects">
                {{ project.name }}
                <WebDevProject :project="project" right={index % 2} />
            </div>

            <button @click="() => (expanded = !expanded)"
                class="mt-40 w-full flex items-center gap-2 group font-semibold text-gray-700 dark:text-gray-100"
                >
                <hr class="flex-1 mr-2 border-gray-400 dark:border-gray-500" />
                <div v-if="expanded">
                    <i class="fas fa-angle-up" />
                    <span class="group-hover:underline">Less Projects</span>
                </div>
                <div v-else>
                    <i class="fas fa-angle-down" />
                    <span class="group-hover:underline">More Projects</span>
                </div>
                <hr class="flex-1 ml-2 border-gray-400 dark:border-gray-500" />
            </button>
        </section>

        <div data-aos="slide-up" data-aos-offset="200"
            class="hidden lg:block absolute shadow-xl right-14 bottom-0 w-4 h-28 bg-gray-400 dark:bg-gray-300" />
    </section>
</template>

<script setup>
let expanded = ref(false)

let projects = [
    
]
</script>
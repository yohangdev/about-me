<template>
  <Page>
    <div class="container mx-auto mt-8 px-4 mb-4">
      <div class="w-full md:w-5/6 lg:flex mx-auto mb-8">
        <p class="text-leading text-grey-darker">Experiences</p>
      </div>

      <div v-for="(item, index) in items" v-bind:key="index" class="w-full md:w-5/6 lg:flex mx-auto mb-8">
        <div class="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg text-center overflow-hidden shadow-md" :style="'background-image: url('+item.image+')'">
        </div>
        <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b-lg lg:rounded-b-none lg:rounded-r-lg p-4 sm:p-8 sm:py-8 flex flex-col justify-between leading-normal shadow-md">
          <div>
            <p class="text-base text-grey-darkest font-bold">{{ item.position }}</p>
            <p class="text-base text-grey-darkest mb-2">{{ item.company }}</p>
            <p class="text-sm text-grey-dark">{{ item.work }}</p>
            <p class="text-sm text-grey-dark mb-2">{{ item.location }}</p>

            <p class="text-sm text-black">Part of Development Acceleration Team, digital service unit, initiated by the newly elected Governor of West Java, Ridwan Kamil. The team harnesses tech to deliver public services and to enhance data-driven decision making.</p>
          </div>
        </div>
      </div>

    </div>
  </Page>
</template>

<script>
import Page from '@/views/layouts/Page'

export default {
  components: {
    Page
  },

  data () {
    return {
      items: [
        {
          position: 'Backend Engineer',
          company: 'Jabar Digital Service',
          work: 'Mar 2019 - Present',
          location: 'Bandung, Jawa Barat, Indonesia',
          image: 'https://i.imgur.com/1M0DGCA.jpg'
        },
        {
          position: 'Senior Web Developer',
          company: 'PT Javan Cipta Solusi, Javanlabs',
          work: 'Jan 2014 - Feb 2019 (5 yrs 2 mos)',
          location: 'Bandung, Jawa Barat, Indonesia',
          image: 'https://i.imgur.com/1M0DGCA.jpg'
        },
        {
          position: 'Web Developer',
          company: 'PT Gamatechno Indonesia',
          work: 'Jun 2011 - Des 2013 (2 yrs 7 mos)',
          location: 'Yogyakarta, Indonesia',
          image: 'https://i.imgur.com/1M0DGCA.jpg'
        }
      ]
    }
  }
}
</script>

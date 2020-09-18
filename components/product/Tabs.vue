<template>
  <div class="tabs">
    <div class="tabs-menu mb-32">
      <div
        v-for="tab in tabs"
        :key="tab.alias"
        class="tabs-menu__item"
        :class="{ active: tab.isActive }"
        @click="toggleTab(tab)"
      >
        {{ tab.name }}
      </div>
    </div>
    <div :class="`tabs-content ${activeTab}`">
      <div class="tab specs">
        <div class="tab__description mb-32">
          {{ item.specifications_text }}
        </div>
        <div class="tab__heading mb-32">
          Features:
        </div>
        <div class="tab__item">
          <div class="tab__item__icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3333 22.584V25.3333H24V28H8V25.3333H14.6667V22.584C12.0889 22.2589 9.71842 21.0044 8 19.0557C6.28158 17.107 5.33338 14.5981 5.33333 12V4H26.6667V12C26.6666 14.5981 25.7184 17.107 24 19.0557C22.2816 21.0044 19.9111 22.2589 17.3333 22.584ZM1.33333 6.66667H4V12H1.33333V6.66667ZM28 6.66667H30.6667V12H28V6.66667Z" fill="#677B8F" />
            </svg>
          </div>
          <div class="tab__item__info">
            <div class="tab__heading--small">
              A challenge for a true champion
            </div>
            <div class="tab__description">
              {{ item.description }}
            </div>
          </div>
        </div>
        <div class="tab__item">
          <div class="tab__item__icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9413 20.752C23.4867 22.1627 26.096 25.4187 26.584 29.3333H5.416C5.904 25.4187 8.51334 22.1627 12.0587 20.752L16 26.6667L19.9413 20.752ZM24 2.66666V10.6667C24 15.0853 20.4187 18.6667 16 18.6667C11.5813 18.6667 8 15.0853 8 10.6667V2.66666H24ZM21.3333 10.6667H10.6667C10.6667 13.6133 13.0533 16 16 16C18.9467 16 21.3333 13.6133 21.3333 10.6667Z" fill="#677B8F" />
            </svg>
          </div>
          <div class="tab__item__info">
            <div class="tab__heading--small">
              Pilot's sweaty hands
            </div>
            <div class="tab__description">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="tab team">
        <div class="tab__description mb-32">
          {{ item.description }}
        </div>
        <div class="tab__heading mb-32">
          Qualified specialists
        </div>
        <div class="tab__cards mb-32">
          <div class="tab__card">
            <div class="tab__img">
              <img src="~static/images/team01.png">
            </div>
            <div class="tab__card__info">
              <div class="tab__heading--small">
                Marvin McKinney
              </div>
              <div class="tab__subheading">
                Pilot assistant
              </div>
            </div>
          </div>
          <div class="tab__card">
            <div class="tab__img">
              <img src="~static/images/team02.png">
            </div>
            <div class="tab__card__info">
              <div class="tab__heading--small">
                Savannah Nguyen
              </div>
              <div class="tab__subheading">
                Mechanic
              </div>
            </div>
          </div>
          <div class="tab__card">
            <div class="tab__img">
              <img src="~static/images/team03.png">
            </div>
            <div class="tab__card__info">
              <div class="tab__heading--small">
                Courtney Henry
              </div>
              <div class="tab__subheading">
                Stewardess
              </div>
            </div>
          </div>
        </div>
        <div class="tab__description">
          {{ item.team_text }}
        </div>
      </div>
      <div class="tab terms">
        <div class="tab__description mb-32">
          {{ item.description }}
        </div>
        <div class="tab__description mb-32">
          {{ item.term_text }}
        </div>
        <div class="tab__heading--small mb-24">
          Additional conditions:
        </div>
        <ul class="tab__list">
          <li v-for="line in termsList" :key="line">
            {{ line }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs-menu {
  display: flex;
  justify-content: space-between;
  width: 300px;
}
.tabs-menu__item {
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: #677B8F;
}
.tabs-menu__item.active {
  color: #4959FF;
}
.tab {
  display: none;
}
.tabs-content.specs .tab.specs,
.tabs-content.team .tab.team,
.tabs-content.terms .tab.terms {
  display: block;
}
.tab__heading {
  font-weight: bold;
  font-size: 24px;
  line-height: 21px;
  color: #012345;
}
.tab__heading--small {
  font-weight: bold;
  font-size: 16px;
  line-height: 152%;
  color: #012345;
  margin-bottom: 8px;
}
.tab__subheading {
  font-weight: 300;
  font-size: 12px;
  line-height: 148%;
  color: #677B8F;
}
.tab__description {
  font-weight: 300;
  font-size: 14px;
  line-height: 146%;
  color: #677B8F;
}
.tab__item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.tab__item__icon {
  width: 80px;
  height: 96px;
  background: #F3F4F7;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
}
.tab__cards {
  display: flex;
  justify-content: space-between;
}
.tab__card {
  max-width: 162px;
}
.tab__img {
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 16px;
}
.tab__img img {
  display: block;
}
.tab__list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.tab__list li {
  padding-left: 24px;
  font-weight: 300;
  font-size: 14px;
  line-height: 146%;
  color: #677B8F;
  margin-bottom: 16px;
  position: relative;
}
.tab__list li::before {
  width: 4px;
  height: 4px;
  background: #F84AB3;
  border-radius: 2px;
  position: absolute;
  left: 0;
  top: 8px;
  content: '';
}
.mb-32 {
  margin-bottom: 32px;
}
.mb-24 {
  margin-bottom: 24px;
}
.night .tabs-menu__item:not(.active),
.night .tab__subheading,
.night .tab__description,
.night .tab__list li {
  color: #99A7B5;
}
.night .tab__heading,
.night .tab__heading--small {
  color: #FCFCFC;
}
.night .tab__item__icon {
  background: #011C37;
}
.night .tab__item__icon svg path {
  fill: #99A7B5;
}
@media (max-width: 375px) {
  .mb-32, .mb-24 {
    margin-bottom: 16px;
  }
  .tab__item .tab__heading--small {
    margin-bottom: 4px;
  }
  .tab__item__icon {
    margin-right: 16px;
    width: 64px;
    height: 80px;
  }
  .tab__item__icon svg {
    width: 24px;
    height: 24px;
  }
  .tab__cards {
    flex-direction: column;
  }
  .tab__card {
    max-width: unset;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  .tab__img {
    flex-shrink: 0;
    margin-right: 16px;
    margin-bottom: 0;
  }
  .tab__img img {
    width: 132px;
    height: 80px;
  }
  .tab__card__info {
    flex: 1;
  }
  .tab__card__info .tab__heading--small {
    margin-bottom: 4px;
  }
  .tab__list li {
    margin-bottom: 8px;
  }
}
</style>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    activeTab: '',
    tabs: [{
      name: 'Specifications',
      isActive: true,
      alias: 'specs'
    }, {
      name: 'Team',
      isActive: false,
      alias: 'team'
    }, {
      name: 'Rent terms',
      isActive: false,
      alias: 'terms'
    }],
    termsList: [
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    ]
  }),
  created () {
    const tab = this.tabs.find(x => x.isActive)
    this.activeTab = tab.alias
  },
  methods: {
    toggleTab (tab) {
      if (tab.isActive) {
        return
      }
      this.activeTab = tab.alias

      this.tabs.forEach((x) => { x.isActive = false })
      tab.isActive = true
    }
  }
}
</script>

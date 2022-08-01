<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app temporary>
      <v-list dense>
        <v-list-item-group v-for="(item, i) in items" :key="i" color="primary">
          <v-list-item v-if="!item.submenu" :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title.toUpperCase()" />
            </v-list-item-content>
          </v-list-item>
          <v-list-group v-else :prepend-icon="item.icon" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.title.toUpperCase()"
                ></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="child in item.submenu"
              :key="child.title"
              :to="child.to"
            >
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar fixed app hide-on-scroll height="64" elevate-on-scroll>
      <v-app-bar-nav-icon class="hidden-lg-and-up" @click="drawer = true" />
      <nuxt-link to="/" class="d-flex">
        <Logo />
      </nuxt-link>
      <v-spacer />

      <template v-for="(name, menuitem) in items">
        <template v-if="name.submenu">
          <v-menu
            :key="menuitem"
            open-on-hover
            offset-y
            transition="slide-y-transition"
            bottom
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                class="py-5 submenubtn hidden-lg-and-down"
                :ripple="false"
                v-bind="attrs"
                style="height: auto"
                v-on="on"
              >
                {{ name.title }}
                <v-icon right small class="mx-0"> mdi-chevron-down </v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item
                v-for="(item, index) in name.submenu"
                :key="index"
                link
                :to="item.to"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <v-btn
          v-else
          :key="menuitem"
          depressed
          tile
          plain
          class="py-8 hidden-md-and-down"
          :to="name.to"
          >{{ name.title }}</v-btn
        > </template
      ><v-spacer />
      <ModalsSignIn />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-folder-home-outline',
          title: 'Inicio',
          to: '/',
        },
        {
          icon: 'mdi-human-handsup',
          title: 'Clientes',
          to: '/clients',
        },
        {
          icon: 'mdi-hand-heart',
          title: 'Donaciones',
          to: '/donations',
        },
        {
          icon: 'mdi-arm-flex-outline',
          title: 'Maker',
          to: '/maker',
        },
        {
          icon: 'mdi-handball',
          title: 'Protesis',
          to: '/protesis',
        },
        {
          icon: 'mdi-information-outline',
          title: 'Acerca de',
          to: '/about',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Galeria',
          to: '/gallery',
        },
        {
          icon: 'mdi-contacts',
          title: 'Contacto',
          to: '/contact',
        },
      ],
    }
  },
}
</script>

<style scoped>
.submenubtn {
  cursor: default;
}
</style>

const template = `
<nav>
  <div class="nav-wrapper white">
    <router-link to="/" class="brand-logo grey-text text-darken-3">Marketer Camp</router-link>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
        <router-link to="/" class="grey-text text-darken-3">Home</router-link>
      </li>
      <li>
        <router-link to="/editor" class="grey-text text-darken-3">Editor</router-link>
      </li>
    </ul>
  </div>
</nav>`

export default {
  name: 'navbar',
  template: template
}

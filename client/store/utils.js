function filterSites(newSites, oldSites) {
  return newSites.filter((site) => {
    for(let i=0; i<oldSites.length; i++) {
      if(site.id === oldSites[i].id) {
        return false;
      }
    }
    return true;
  });
}

export default filterSites;

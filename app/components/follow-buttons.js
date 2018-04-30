import Component from '@ember/component';

export default Component.extend({
  actions: {
    newRelationship (friendId) {
      console.log(friendId)
      console.log('follow-button js', friendId)
      this.sendAction('newRelationship', friendId)
  },
  deleteRelationship (friendId) {
    console.log(friendId)
    console.log('follow-button js', friendId)
    this.sendAction('deleteRelationship', friendId)
}
}
});

export function getUserId() {
    let sc_UserId = localStorage.getItem('sc_UserId');
    if (!sc_UserId) {
      sc_UserId = crypto.randomUUID();
      localStorage.setItem('sc_UserId', sc_UserId);
    }
    return sc_UserId;
  }
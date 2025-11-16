// Simple admin authentication utilities
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin@kmm123", // In production, use environment variables
}

export function validateAdminCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}

export function getAdminToken(): string {
  return btoa(`${ADMIN_CREDENTIALS.username}:${new Date().getTime()}`)
}

export function isAdminAuthenticated(token: string): boolean {
  if (!token) return false
  try {
    const decoded = atob(token)
    return decoded.includes(ADMIN_CREDENTIALS.username)
  } catch {
    return false
  }
}

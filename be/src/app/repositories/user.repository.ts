import { dbPath } from '../utils/db.ts'
import type { IUser } from '../models/user.model.ts'
import BaseRepository from './base.repository.ts'

class UserRepository extends BaseRepository<IUser> {
  constructor() {
    super(dbPath.user)
  }
}

const userRepository = new UserRepository()
export default userRepository

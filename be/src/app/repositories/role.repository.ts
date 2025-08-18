import { dbPath } from '../utils/db.ts'
import type { IRole } from '../models/role.model.ts'
import BaseRepository from './base.repository.ts'

class RoleRepository extends BaseRepository<IRole> {
  constructor() {
    super(dbPath.role)
  }
}

const roleRepository = new RoleRepository()
export default roleRepository

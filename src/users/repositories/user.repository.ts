import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  // private logger = new ApplicationConsoleLogger(CountryRepository.name);

  constructor(private readonly dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  async ormFindOneByEmail(email: string): Promise<UserEntity> {
    return this.createQueryBuilder()
      .where(`email = :email`, { email })
      .getOne();
    // return this.findOneBy({ id }).catch((error) => {
    //     this.logger.error({
    //         message: `findOneByCountryId query failed`,
    //         id,
    //         error,
    //     });
    //     throw new BusinessException(
    //         Error.DB_POSTGRESQL_ERROR,
    //         `findOneByCountryId query failed, id=${id}`,
    //     );
    // });
  }
}

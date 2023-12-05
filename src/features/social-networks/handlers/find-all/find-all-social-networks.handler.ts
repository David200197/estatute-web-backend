import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindAllSocialNetworksQuery } from './find-all-social-networks.query';
import { SocialNetworksRepositoryModel } from '../../models/social-networks-repository.model';
import { FindAllSocialNetworksHandlerModel } from './find-all-social-networks-handler.model';
import { Inject } from '@nestjs/common';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../../providers/social-networks-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { SocialNetworkssModel } from '../../models/social-networkss.model';

@QueryHandler(FindAllSocialNetworksQuery)
export class FindAllSocialNetworksHandler
  implements
    FindAllSocialNetworksHandlerModel,
    IQueryHandler<FindAllSocialNetworksQuery>
{
  constructor(
    @Inject(SOCIAL_NETWORKS_REPOSITORY_TOKEN)
    private socialNetworksRepository: SocialNetworksRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllSocialNetworksQuery): Promise<
    ResponseWithPaginate<SocialNetworkssModel>
  > {
    return await this.socialNetworksRepository.findAll(filter, options);
  }
}

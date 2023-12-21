import { QueryHandler } from '@nestjs/cqrs';
import { FindAllSocialNetworksQuery } from './find-all-social-network.query';
import { SocialNetworkRepositoryModel } from '../../models/social-network-repository.model';
import { FindAllSocialNetworkHandlerModel } from './find-all-social-network-handler.model';
import { Inject } from '@nestjs/common';
import { SOCIAL_NETWORK_REPOSITORY_TOKEN } from '../../providers/social-network-repository.provider';
import { ResponseWithPaginate } from '@src/common/interfaces/response-with-paginate';
import { SocialNetworksModel } from '../../models/social-networks.model';

@QueryHandler(FindAllSocialNetworksQuery)
export class FindAllSocialNetworkHandler
  implements FindAllSocialNetworkHandlerModel
{
  constructor(
    @Inject(SOCIAL_NETWORK_REPOSITORY_TOKEN)
    private socialNetworkRepository: SocialNetworkRepositoryModel,
  ) {}

  async execute({
    filter,
    options,
  }: FindAllSocialNetworksQuery): Promise<
    ResponseWithPaginate<SocialNetworksModel>
  > {
    return await this.socialNetworkRepository.findAll(filter, options);
  }
}

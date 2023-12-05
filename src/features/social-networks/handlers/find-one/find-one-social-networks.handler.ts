import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindOneSocialNetworksQuery } from './find-one-social-networks.query';
import { SocialNetworksRepositoryModel } from '../../models/social-networks-repository.model';
import { FindOneSocialNetworksHandlerModel } from './find-one-social-networks-handler.model';
import { Inject } from '@nestjs/common';
import { SOCIAL_NETWORKS_REPOSITORY_TOKEN } from '../../providers/social-networks-repository.provider';
import { SocialNetworksModel } from '../../models/social-networks.model';
import { Maybe } from '@src/common/lib/maybe.lib';

@QueryHandler(FindOneSocialNetworksQuery)
export class FindOneSocialNetworksHandler
  implements
    FindOneSocialNetworksHandlerModel,
    IQueryHandler<FindOneSocialNetworksQuery>
{
  constructor(
    @Inject(SOCIAL_NETWORKS_REPOSITORY_TOKEN)
    private socialNetworksRepository: SocialNetworksRepositoryModel,
  ) {}

  async execute({
    filter,
  }: FindOneSocialNetworksQuery): Promise<Maybe<SocialNetworksModel>> {
    const socialNetworks = await this.socialNetworksRepository.findOne(filter);
    return Maybe.fromValue(socialNetworks);
  }
}

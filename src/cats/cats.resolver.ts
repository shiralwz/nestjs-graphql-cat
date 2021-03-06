import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import { CatsService } from "./cats.service";
import { CatDTO } from "./dto/create-cat.dto";
import { CatInput } from "./inputs/cat.input";

@Resolver()
export class CatsResolver {
  constructor(
    private catsService: CatsService
  ) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [CatDTO])
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation(() => CatDTO)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }
}
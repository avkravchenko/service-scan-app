import { ACTIONS } from "./actions";

export const initialState = {
    token: '',
    userInfo: {
        companyLimit: '',
        usedCompanyCount: ''
    },
    formData: {
      issueDateInterval: {
        startDate: "",
        endDate: ""
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn: null,
              maxFullness: false,
              inBusinessNews: false
            }
          ],
          onlyMainRole: false,
          tonality: "",
          onlyWithRiskFactors: false,
          riskFactors: {
            and: [],
            or: [],
            not: []
          },
          themes: {
            and: [],
            or: [],
            not: []
          }
        },
        themesFilter: {
          and: [],
          or: [],
          not: []
        }
      },
      searchArea: {
        excludedSources: [],
        includedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: []
      },
      attributeFilters: {
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true
      },
      similarMode: "duplicates",
      limit: null,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: [
        "totalDocuments",
        "riskFactors"
      ]
    },
    searchFormResponse: null,
    searchFormIds: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TOKEN:
            return {...state, token: action.token};
        case ACTIONS.GET_USER_INFO:  
            return {
                ...state, userInfo: {
                    companyLimit: action.data.companyLimit,
                    usedCompanyCount: action.data.usedCompanyCount
                }
            }  
        case ACTIONS.REMOVE_TOKEN:
            return {
                ...state, token: ''
            }

        case ACTIONS.ADD_START_DATE:
            return {
              ...state,
              formData: {
                ...state.formData,
                issueDateInterval: {
                  ...state.formData.issueDateInterval,
                  startDate: action.date
                }
              }
            }

        case ACTIONS.ADD_END_DATE:
            return {
              ...state,
              formData: {
                ...state.formData,
                issueDateInterval: {
                  ...state.formData.issueDateInterval,
                  endDate: action.date
                }
              }
            }

        case ACTIONS.ADD_INN:
            return {
              ...state,
              formData: {
                ...state.formData,
                searchContext: {
                  ...state.formData.searchContext,
                  targetSearchEntitiesContext: {
                    ...state.formData.searchContext.targetSearchEntitiesContext,
                    targetSearchEntities: [
                      {
                        ...state.formData.searchContext.targetSearchEntitiesContext
                          .targetSearchEntities[0],
                        inn: action.inn
                      }
                    ]
                  }
                }
              }
            }

        case ACTIONS.TOGGLE_MAX_FULLNESS:
            return {
              ...state,
              formData: {
                ...state.formData,
                searchContext: {
                  ...state.formData.searchContext,
                  targetSearchEntitiesContext: {
                    ...state.formData.searchContext.targetSearchEntitiesContext,
                    targetSearchEntities: [
                      {
                        ...state.formData.searchContext.targetSearchEntitiesContext
                          .targetSearchEntities[0],
                          maxFullness: action.boolean
                      }
                    ]
                  }
                }
              }
            }

        case ACTIONS.TOGGLE_IS_BUSINESS_NEWS:
            return {
              ...state,
              formData: {
                ...state.formData,
                searchContext: {
                  ...state.formData.searchContext,
                  targetSearchEntitiesContext: {
                    ...state.formData.searchContext.targetSearchEntitiesContext,
                    targetSearchEntities: [
                      {
                        ...state.formData.searchContext.targetSearchEntitiesContext
                          .targetSearchEntities[0],
                          inBusinessNews: action.boolean
                      }
                    ]
                  }
                }
              }
            }

        case ACTIONS.TOGGLE_ONLY_MAIN_ROLE:
          return {
            ...state,
            formData: {
              ...state.formData,
              searchContext: {
                ...state.formData.searchContext,
                targetSearchEntitiesContext: {
                  ...state.formData.searchContext.targetSearchEntitiesContext,
                  onlyMainRole: action.boolean
                }
              }
            }
          }

        case ACTIONS.ADD_TONALITY: 
          return {
            ...state,
            formData: {
              ...state.formData,
              searchContext: {
                ...state.formData.searchContext,
                targetSearchEntitiesContext: {
                  ...state.formData.searchContext.targetSearchEntitiesContext,
                  tonality: action.tonality
                }

              }

            }
          }

        case ACTIONS.TOGGLE_ONLY_WITH_RISK_FACTORS: 
          return {
            ...state,
            formData: {
              ...state.formData,
              searchContext: {
                ...state.formData.searchContext,
                targetSearchEntitiesContext: {
                  ...state.formData.searchContext.targetSearchEntitiesContext,
                  onlyWithRiskFactors: action.boolean
                }

              }

            }
          }

          case ACTIONS.ADD_LIMIT:
            return {
              ...state,
              formData: {
                ...state.formData,
                limit: action.num
              }
            }

          case ACTIONS.ADD_SEARCH_FORM_RESPONSE:
            return {
              ...state,
              searchFormResponse: action.data
            }

          case ACTIONS.ADD_SEARCH_FORM_IDS:
            return {
              ...state,
              searchFormIds: action.data
            }

        default: {
            return state;
        }
    }
}

export default reducer;
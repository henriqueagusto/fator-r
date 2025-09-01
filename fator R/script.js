<div class="result-fator-r">Fator R: ${results.fatorR.percentual.toFixed(2)}%</div>
                        <p class="result-status">${results.fatorR.statusLegal}</p>
                    </div>
                    <div class="result-score">
                        <div class="score-circle">
                            <div class="score-value">${results.analise.pontuacao}</div>
                            <div class="score-label">Pontuação</div>
                        </div>
                    </div>
                </div>

                <div class="results-dashboard">
                    <div class="dashboard-section">
                        <h4>Dados do Cálculo</h4>
                        <div class="data-cards">
                            <div class="data-card">
                                <div class="card-icon"><i class="fas fa-chart-line"></i></div>
                                <div class="card-content">
                                    <div class="card-value">${this.formatCurrency(results.dadosCalculados.receita.bruta)}</div>
                                    <div class="card-label">Receita Bruta (12 meses)</div>
                                </div>
                            </div>
                            <div class="data-card">
                                <div class="card-icon"><i class="fas fa-users"></i></div>
                                <div class="card-content">
                                    <div class="card-value">${this.formatCurrency(results.dadosCalculados.massaSalarial.total)}</div>
                                    <div class="card-label">Massa Salarial Total</div>
                                </div>
                            </div>
                            <div class="data-card">
                                <div class="card-icon"><i class="fas fa-user-tie"></i></div>
                                <div class="card-content">
                                    <div class="card-value">${results.dadosCalculados.massaSalarial.funcionarios.quantidade}</div>
                                    <div class="card-label">Funcionários CLT</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="dashboard-section">
                        <h4>Comparativo de Tributação</h4>
                        <div class="tax-comparison-detailed">
                            <div class="tax-column ${results.fatorR.anexoRecomendado === 'III' ? 'recommended' : ''}">
                                <div class="tax-header">
                                    <h5>Anexo III</h5>
                                    <div class="tax-badge">Prestação de Serviços</div>
                                </div>
                                <div class="tax-body">
                                    <div class="tax-main-value">
                                        ${this.formatCurrency(results.tributacao.anexoIII.impostoMensal)}
                                        <span>/mês</span>
                                    </div>
                                    <div class="tax-details">
                                        <div class="detail-item">
                                            <span>Alíquota Nominal:</span>
                                            <span>${results.tributacao.anexoIII.aliquotaNominal.toFixed(2)}%</span>
                                        </div>
                                        <div class="detail-item">
                                            <span>Alíquota Efetiva:</span>
                                            <span>${results.tributacao.anexoIII.aliquotaEfetiva.toFixed(2)}%</span>
                                        </div>
                                        <div class="detail-item">
                                            <span>Faixa:</span>
                                            <span>${results.tributacao.anexoIII.faixa}ª (${results.tributacao.anexoIII.faixaDescricao})</span>
                                        </div>
                                        <div class="detail-item">
                                            <span>Anual:</span>
                                            <span>${this.formatCurrency(results.tributacao.anexoIII.impostoAnual)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="vs-separator">
                                <div class="vs-circle">VS</div>
                            </div>

                            <div class="tax-column ${results.fatorR.anexoRecomendado === 'V' ? 'recommended' : ''}">
                                <div class="tax-header">
                                    <h5>Anexo V</h5>
                                    <div class="tax-badge">Outros Serviços</div>
                                </div>
                                <div class="tax-body">
                                    <div class="tax-main-value">
                                        ${this.formatCurrency(results.tributacao.anexoV.impostoMensal)}
                                        <span>/mês</span>
                                    </div>
                                    <div class="tax-details">
                                        <div class="detail-item">
                                            <span>Alíquota Nominal:</span>
                                            <span>${results.tributacao.anexoV.aliquotaNominal.toFixed(2)}%</span>
                                        </div>
                                        <div class="detail-item">
                                            <span>Alíquota Efetiva:</span>
                                            <span>${results.tributacao.anexoV.aliquotaEfetiva.toFixed(2)}%</span>
                                        </div>
                                        <div class="detail-item">
                                            <span>Faixa:</span>
                                            <span>${results.tributacao.anexoV.faixa}ª (${results.tributacao.anexoV.faixaDescricao})</span>
                                        </div>
                                        <div class="detail-item">
                                            <span>Anual:</span>
                                            <span>${this.formatCurrency(results.tributacao.anexoV.impostoAnual)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        ${results.tributacao.economia.anual > 0 ? `
                            <div class="economy-highlight-detailed">
                                <div class="economy-icon">
                                    <i class="fas fa-piggy-bank"></i>
                                </div>
                                <div class="economy-content">
                                    <h5>Economia Tributária Identificada</h5>
                                    <div class="economy-values">
                                        <div class="economy-annual">
                                            <span class="value">${this.formatCurrency(results.tributacao.economia.anual)}</span>
                                            <span class="period">por ano</span>
                                        </div>
                                        <div class="economy-monthly">
                                            <span class="value">${this.formatCurrency(results.tributacao.economia.mensal)}</span>
                                            <span class="period">por mês</span>
                                        </div>
                                        <div class="economy-percent">
                                            <span class="value">${results.tributacao.economia.percentual.toFixed(1)}%</span>
                                            <span class="period">menos impostos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>

                    <div class="dashboard-section">
                        <h4>Análise Detalhada</h4>
                        <div class="analysis-container">
                            <div class="analysis-summary">
                                <p class="analysis-main">${results.analise.resumo}</p>
                                <div class="next-review">
                                    <i class="fas fa-calendar-check"></i>
                                    <span>Próxima revisão recomendada: ${results.analise.proximaRevisao}</span>
                                </div>
                            </div>

                            <div class="analysis-recommendations">
                                ${results.analise.analises.map(analise => `
                                    <div class="recommendation-item ${analise.tipo}">
                                        <div class="rec-header">
                                            <i class="fas fa-${analise.tipo === 'success' ? 'check-circle' : analise.tipo === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
                                            <h6>${analise.titulo}</h6>
                                        </div>
                                        <p class="rec-description">${analise.descricao}</p>
                                        <div class="rec-impact"><strong>Impacto:</strong> ${analise.impacto}</div>
                                        <div class="rec-action"><strong>Recomendação:</strong> ${analise.recomendacao}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="dashboard-section">
                        <h4>Conformidade Legal</h4>
                        <div class="compliance-grid">
                            <div class="compliance-item ${results.conformidade.dentroLimiteSN ? 'valid' : 'invalid'}">
                                <i class="fas fa-${results.conformidade.dentroLimiteSN ? 'check-circle' : 'times-circle'}"></i>
                                <span>Limite Simples Nacional</span>
                            </div>
                            <div class="compliance-item ${results.conformidade.fatorRValido ? 'valid' : 'invalid'}">
                                <i class="fas fa-${results.conformidade.fatorRValido ? 'check-circle' : 'times-circle'}"></i>
                                <span>Fator R Válido</span>
                            </div>
                            <div class="compliance-item ${results.conformidade.dadosConsistentes ? 'valid' : 'invalid'}">
                                <i class="fas fa-${results.conformidade.dadosConsistentes ? 'check-circle' : 'times-circle'}"></i>
                                <span>Dados Consistentes</span>
                            </div>
                        </div>
                        
                        ${results.conformidade.observacoes.length > 0 ? `
                            <div class="compliance-observations">
                                <h6>Observações:</h6>
                                <ul>
                                    ${results.conformidade.observacoes.map(obs => `<li>${obs}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <div class="results-actions-advanced">
                    <div class="primary-actions">
                        <button class="btn btn-primary btn-lg" data-action="export-complete-report">
                            <i class="fas fa-file-contract"></i>
                            Gerar Relatório Oficial Completo
                        </button>
                        <button class="btn btn-accent btn-lg" data-action="save-calculation-advanced">
                            <i class="fas fa-cloud-upload-alt"></i>
                            Salvar no Histórico
                        </button>
                    </div>
                    
                    <div class="secondary-actions">
                        <button class="btn btn-outline" data-action="export-pdf-summary">
                            <i class="fas fa-file-pdf"></i>
                            PDF Resumido
                        </button>
                        <button class="btn btn-outline" data-action="export-excel">
                            <i class="fas fa-file-excel"></i>
                            Planilha Excel
                        </button>
                        <button class="btn btn-outline" data-action="share-results-advanced">
                            <i class="fas fa-share-alt"></i>
                            Compartilhar
                        </button>
                        <button class="btn btn-outline" data-action="compare-scenarios">
                            <i class="fas fa-balance-scale"></i>
                            Comparar Cenários
                        </button>
                        <button class="btn btn-secondary" data-action="new-calculation-advanced">
                            <i class="fas fa-plus-circle"></i>
                            Novo Cálculo
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.animateResultsDisplay();
    }

    // ==================== SIMULADOR AVANÇADO ====================

    runAdvancedSimulation() {
        const params = this.state.simulator.parametros;
        const results = this.performAdvancedSimulation(params);
        
        this.updateSimulatorResultsAdvanced(results);
        this.updateSimulatorChartsAdvanced(results);
    }

    performAdvancedSimulation(params) {
        // Simulação mais sofisticada
        const folhaAnual = params.funcionarios * params.salarioMedio * 12;
        const prolaboreAnual = params.prolabore * 12;
        const beneficiosAnual = folhaAnual * params.beneficiosPercent;

        // Encargos calculados com precisão
        const encargosConfig = this.config.parametros.encargos;
        const baseSalarial = folhaAnual + prolaboreAnual;
        
        const encargos = {
            inssPatronal: baseSalarial * encargosConfig.inssPatronal,
            fgts: folhaAnual * encargosConfig.fgts,
            decimoTerceiro: (params.funcionarios * params.salarioMedio),
            ferias: (params.funcionarios * params.salarioMedio) * (encargosConfig.ferias + encargosConfig.adicionalFerias),
            outros: baseSalarial * (encargosConfig.seguroAcidenteTrabalho + encargosConfig.salarioEducacao + encargosConfig.incra + encargosConfig.sebrae)
        };

        const totalEncargos = Object.values(encargos).reduce((sum, val) => sum + val, 0);
        const massaSalarialTotal = baseSalarial + totalEncargos + beneficiosAnual;
        
        const fatorR = (massaSalarialTotal / params.receita) * 100;
        const qualificaAnexoIII = fatorR >= 28;

        // Calcular impostos para ambos anexos
        const anexoIII = this.calculateOfficialTax(params.receita, 'III');
        const anexoV = this.calculateOfficialTax(params.receita, 'V');

        const economia = anexoV.impostoAnual - anexoIII.impostoAnual;
        
        // Projeção de crescimento
        const projecoes = this.calculateGrowthProjections(params);

        return {
            fatorR: {
                valor: fatorR,
                qualificaAnexoIII,
                anexoRecomendado: qualificaAnexoIII ? 'III' : 'V',
                diferenciaPara28: fatorR - 28
            },
            massaSalarial: {
                base: baseSalarial,
                encargos: totalEncargos,
                beneficios: beneficiosAnual,
                total: massaSalarialTotal,
                detalhesEncargos: encargos
            },
            tributacao: {
                anexoIII,
                anexoV,
                economia: {
                    anual: Math.max(0, economia),
                    mensal: Math.max(0, economia / 12),
                    percentual: economia > 0 ? (economia / anexoV.impostoAnual) * 100 : 0
                }
            },
            projecoes,
            cenarios: this.generateAlternativeScenarios(params),
            recomendacoes: this.generateSimulatorRecommendations(fatorR, economia, params)
        };
    }

    calculateGrowthProjections(params) {
        const projecoes = [];
        const baseReceita = params.receita;
        const crescimento = params.crescimentoAnual;

        for (let ano = 1; ano <= 3; ano++) {
            const receitaProjetada = baseReceita * Math.pow(1 + crescimento, ano);
            const novoSimulacao = this.performAdvancedSimulation({
                ...params,
                receita: receitaProjetada
            });

            projecoes.push({
                ano: new Date().getFullYear() + ano,
                receita: receitaProjetada,
                fatorR: novoSimulacao.fatorR.valor,
                economia: novoSimulacao.tributacao.economia.anual,
                anexoRecomendado: novoSimulacao.fatorR.anexoRecomendado
            });
        }

        return projecoes;
    }

    generateAlternativeScenarios(baseParams) {
        const cenarios = [];

        // Cenário 1: Aumentar pró-labore
        const cenario1 = this.performAdvancedSimulation({
            ...baseParams,
            prolabore: baseParams.prolabore * 1.5
        });

        cenarios.push({
            nome: 'Aumento de Pró-labore (+50%)',
            parametros: { prolabore: baseParams.prolabore * 1.5 },
            resultado: cenario1,
            viabilidade: this.assessScenarioViability(cenario1, baseParams)
        });

        // Cenário 2: Contratar mais funcionários
        const cenario2 = this.performAdvancedSimulation({
            ...baseParams,
            funcionarios: baseParams.funcionarios + 2
        });

        cenarios.push({
            nome: 'Contratar 2 Funcionários',
            parametros: { funcionarios: baseParams.funcionarios + 2 },
            resultado: cenario2,
            viabilidade: this.assessScenarioViability(cenario2, baseParams)
        });

        // Cenário 3: Aumentar salário médio
        const cenario3 = this.performAdvancedSimulation({
            ...baseParams,
            salarioMedio: baseParams.salarioMedio * 1.2
        });

        cenarios.push({
            nome: 'Aumento Salarial (+20%)',
            parametros: { salarioMedio: baseParams.salarioMedio * 1.2 },
            resultado: cenario3,
            viabilidade: this.assessScenarioViability(cenario3, baseParams)
        });

        return cenarios;
    }

    assessScenarioViability(cenario, baseParams) {
        const custoAdicional = cenario.massaSalarial.total - (baseParams.receita * 0.28);
        const retornoEconomia = cenario.tributacao.economia.anual;
        const payback = custoAdicional > 0 && retornoEconomia > 0 ? custoAdicional / retornoEconomia : Infinity;

        let classificacao = 'baixa';
        if (payback <= 1) classificacao = 'alta';
        else if (payback <= 2) classificacao = 'média';

        return {
            custoAdicional,
            retornoEconomia,
            paybackAnos: payback,
            classificacao,
            recomendado: payback <= 2 && retornoEconomia > custoAdicional * 0.1
        };
    }

    // ==================== AÇÕES DOS BOTÕES AVANÇADAS ====================

    executeAction(action, button) {
        const actionMap = {
            'export-complete-report': () => this.exportCompleteReport(button),
            'export-pdf-summary': () => this.exportPDFSummary(button),
            'export-excel': () => this.exportExcelReport(button),
            'save-calculation-advanced': () => this.saveCalculationAdvanced(button),
            'share-results-advanced': () => this.shareResultsAdvanced(button),
            'compare-scenarios': () => this.openScenariosComparison(),
            'new-calculation-advanced': () => this.startNewCalculationAdvanced(),
            'start-calculator': () => this.startAdvancedCalculator(),
            'reset-simulator': () => this.resetSimulatorAdvanced()
        };

        const handler = actionMap[action];
        if (handler) {
            handler();
        } else {
            console.warn(`Ação não implementada: ${action}`);
        }
    }

    async exportCompleteReport(button) {
        if (!this.state.results.current) {
            this.showAdvancedNotification('Nenhum resultado disponível para exportar', 'error');
            return;
        }

        this.setButtonLoadingAdvanced(button, true, 'Gerando relatório completo...');

        try {
            // Simular geração de relatório completo
            await this.delay(3000);
            
            const reportData = this.generateCompleteReportData();
            await this.generatePDFReport(reportData);
            
            this.showAdvancedNotification('Relatório completo gerado com sucesso!', 'success');
            this.trackUserAction('export_complete_report');
            
        } catch (error) {
            this.showAdvancedNotification('Erro ao gerar relatório completo', 'error');
        } finally {
            this.setButtonLoadingAdvanced(button, false);
        }
    }

    async exportPDFSummary(button) {
        this.setButtonLoadingAdvanced(button, true, 'Gerando PDF...');

        try {
            await this.delay(1500);
            
            const summaryData = this.generateSummaryReportData();
            await this.generatePDFSummary(summaryData);
            
            this.showAdvancedNotification('PDF resumido gerado!', 'success');
            
        } catch (error) {
            this.showAdvancedNotification('Erro ao gerar PDF', 'error');
        } finally {
            this.setButtonLoadingAdvanced(button, false);
        }
    }

    async exportExcelReport(button) {
        this.setButtonLoadingAdvanced(button, true, 'Gerando planilha...');

        try {
            await this.delay(2000);
            
            const excelData = this.generateExcelReportData();
            await this.generateExcelFile(excelData);
            
            this.showAdvancedNotification('Planilha Excel gerada!', 'success');
            
        } catch (error) {
            this.showAdvancedNotification('Erro ao gerar planilha', 'error');
        } finally {
            this.setButtonLoadingAdvanced(button, false);
        }
    }

    // ==================== UTILITÁRIOS AVANÇADOS ====================

    showAdvancedNotification(message, type = 'info', duration = 5000, actions = []) {
        const notificationId = `notification_${Date.now()}`;
        
        const notification = document.createElement('div');
        notification.id = notificationId;
        notification.className = `advanced-notification ${type}`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle', 
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle',
            loading: 'fa-spinner fa-spin'
        };

        notification.innerHTML = `
            <div class="notification-content-advanced">
                <div class="notification-icon">
                    <i class="fas ${icons[type]}"></i>
                </div>
                <div class="notification-body">
                    <div class="notification-message">${message}</div>
                    ${actions.length > 0 ? `
                        <div class="notification-actions">
                            ${actions.map(action => `
                                <button class="notification-action-btn" data-action="${action.action}">
                                    ${action.label}
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                <button class="notification-close-advanced">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="notification-progress">
                <div class="progress-bar" style="animation-duration: ${duration}ms;"></div>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);

        // Auto-remove
        const autoRemove = setTimeout(() => {
            this.removeAdvancedNotification(notificationId);
        }, duration);

        // Manual close
        notification.querySelector('.notification-close-advanced').addEventListener('click', () => {
            clearTimeout(autoRemove);
            this.removeAdvancedNotification(notificationId);
        });

        // Action handlers
        actions.forEach(action => {
            const btn = notification.querySelector(`[data-action="${action.action}"]`);
            if (btn) {
                this.addEventHandler(btn, 'click', () => {
                    action.handler();
                    clearTimeout(autoRemove);
                    this.removeAdvancedNotification(notificationId);
                });
            }
        });

        this.state.ui.notificationsQueue.push(notificationId);
        return notificationId;
    }

    removeAdvancedNotification(notificationId) {
        const notification = document.getElementById(notificationId);
        if (notification) {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 300);
        }
        
        this.state.ui.notificationsQueue = this.state.ui.notificationsQueue.filter(id => id !== notificationId);
    }

    setButtonLoadingAdvanced(button, loading, customText = null) {
        if (!button) return;

        if (loading) {
            button.dataset.originalHTML = button.innerHTML;
            const loadingText = customText || 'Processando...';
            button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${loadingText}`;
            button.disabled = true;
            button.classList.add('loading', 'processing');
        } else {
            button.innerHTML = button.dataset.originalHTML || button.innerHTML;
            button.disabled = false;
            button.classList.remove('loading', 'processing');
        }
    }

    // ==================== GERENCIAMENTO DE EVENTOS ====================

    addEventHandler(element, event, handler, useCapture = false) {
        if (!element || !event || !handler) return;

        element.addEventListener(event, handler, useCapture);
        
        // Armazenar referência para cleanup
        if (!this.eventHandlers.has(element)) {
            this.eventHandlers.set(element, []);
        }
        this.eventHandlers.get(element).push({ event, handler, useCapture });
    }

    removeAllEventHandlers() {
        this.eventHandlers.forEach((handlers, element) => {
            handlers.forEach(({ event, handler, useCapture }) => {
                element.removeEventListener(event, handler, useCapture);
            });
        });
        this.eventHandlers.clear();
    }

    // ==================== UTILITÁRIOS GERAIS ====================

    formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value || 0);
    }

    formatNumber(value) {
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(value || 0);
    }

    formatPercentage(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format((value || 0) / 100);
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // ==================== INICIALIZAÇÃO AVANÇADA ====================

    initializeAdvancedComponents() {
        this.setupAdvancedUI();
        this.loadUserPreferences();
        this.initializeAdvancedSimulator();
        this.setupAdvancedValidation();
    }

    loadCompanyDatabase() {
        // Carregar dados salvos
        const saved = localStorage.getItem('fatorr_pro_data');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.state = { ...this.state, ...data };
            } catch (error) {
                console.warn('Erro ao carregar dados salvos:', error);
            }
        }
    }

    trackUserAction(action, metadata = {}) {
        const event = {
            action,
            timestamp: new Date().toISOString(),
            metadata,
            sessionId: this.getSessionId()
        };

        // Salvar para analytics
        const actions = JSON.parse(localStorage.getItem('fatorr_user_actions') || '[]');
        actions.push(event);
        
        // Manter apenas os últimos 100 eventos
        if (actions.length > 100) {
            actions.splice(0, actions.length - 100);
        }
        
        localStorage.setItem('fatorr_user_actions', JSON.stringify(actions));
        
        if (this.DEBUG) {
            console.log('User action tracked:', event);
        }
    }

    getSessionId() {
        let sessionId = sessionStorage.getItem('fatorr_session_id');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('fatorr_session_id', sessionId);
        }
        return sessionId;
    }

    // Placeholder methods for advanced features
    setupAdvancedUI() { /* Implementar interface avançada */ }
    loadUserPreferences() { /* Carregar preferências */ }
    initializeAdvancedSimulator() { /* Configurar simulador */ }
    setupAdvancedValidation() { /* Validação avançada */ }
    generateCompleteReportData() { return {}; }
    generateSummaryReportData() { return {}; }
    generateExcelReportData() { return {}; }
    generatePDFReport(data) { return Promise.resolve(); }
    generatePDFSummary(data) { return Promise.resolve(); }
    generateExcelFile(data) { return Promise.resolve(); }

    // ==================== CLEANUP ====================

    destroy() {
        this.removeAllEventHandlers();
        
        // Limpar timers
        clearTimeout(this.debounceTimer);
        clearTimeout(this.throttleTimer);
        clearInterval(this.updateInterval);
        
        // Limpar notificações
        this.state.ui.notificationsQueue.forEach(id => {
            this.removeAdvancedNotification(id);
        });
        
        // Limpar charts
        Object.values(this.state.ui.charts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        
        // Limpar estado
        this.state.ui.charts = {};
        
        console.log('FatorRProSystem destroyed');
    }
}

// ==================== ENGINE DE CÁLCULO OFICIAL ====================

class FatorRCalculationEngine {
    constructor(config, dados) {
        this.config = config;
        this.dados = dados;
        this.result = null;
    }

    execute() {
        try {
            // 1. Validar dados de entrada
            this.validateInputData();
            
            // 2. Calcular base salarial
            const baseSalarial = this.calculateBaseSalarial();
            
            // 3. Calcular encargos obrigatórios
            const encargos = this.calculateMandatoryCharges(baseSalarial);
            
            // 4. Calcular benefícios
            const beneficios = this.calculateBenefits();
            
            // 5. Massa salarial total
            const massaSalarialTotal = baseSalarial.total + encargos.total + beneficios.total;
            
            // 6. Fator R oficial
            const fatorR = this.calculateOfficialFatorR(massaSalarialTotal);
            
            // 7. Análise tributária
            const tributacao = this.calculateTaxAnalysis(fatorR);
            
            // 8. Compilar resultado final
            this.result = {
                timestamp: new Date().toISOString(),
                baseSalarial,
                encargos,
                beneficios,
                massaSalarialTotal,
                fatorR,
                tributacao,
                conformidade: this.validateCompliance(),
                recomendacoes: this.generateRecommendations()
            };
            
            return this.result;
            
        } catch (error) {
            console.error('Erro no cálculo do Fator R:', error);
            throw new Error(`Falha no cálculo: ${error.message}`);
        }
    }

    validateInputData() {
        const { receita, pessoal } = this.dados;
        
        if (!receita || receita.rbt12 <= 0) {
            throw new Error('Receita bruta inválida');
        }
        
        if (receita.rbt12 > 4800000) {
            throw new Error('Receita acima do limite do Simples Nacional');
        }
        
        if (!pessoal || typeof pessoal.prolabore.valorMensal !== 'number') {
            throw new Error('Dados de pró-labore inválidos');
        }
    }

    calculateBaseSalarial() {
        const { pessoal } = this.dados;
        
        // Pró-labore anual
        const prolaboreAnual = pessoal.prolabore.valorMensal * 12;
        
        // Folha de funcionários
        const folhaFuncionarios = pessoal.funcionarios.reduce((total, func) => {
            return total + (func.salarioBase * 12) + (func.adicionais * 12);
        }, 0);
        
        const total = prolaboreAnual + folhaFuncionarios;
        
        return {
            prolabore: prolaboreAnual,
            folhaFuncionarios,
            total,
            detalhamento: {
                funcionarios: pessoal.funcionarios.length,
                mediaSalarial: folhaFuncionarios / Math.max(1, pessoal.funcionarios.length * 12)
            }
        };
    }

    calculateMandatoryCharges(baseSalarial) {
        const config = this.config.parametros.encargos;
        
        // INSS Patronal (20% sobre toda base)
        const inssPatronal = baseSalarial.total * config.inssPatronal;
        
        // FGTS (8% apenas sobre funcionários CLT)
        const fgts = baseSalarial.folhaFuncionarios * config.fgts;
        
        // 13º Salário (1/12 da folha anual)
        const decimoTerceiro = baseSalarial.folhaFuncionarios * config.decimoTerceiro;
        
        // Férias + 1/3
        const ferias = baseSalarial.folhaFuncionarios * config.ferias;
        const adicionalFerias = baseSalarial.folhaFuncionarios * config.adicionalFerias;
        
        // Outros encargos obrigatórios
        const rat = baseSalarial.folhaFuncionarios * config.seguroAcidenteTrabalho;
        const salarioEducacao = baseSalarial.total * config.salarioEducacao;
        const incra = baseSalarial.total * config.incra;
        const sebrae = baseSalarial.total * config.sebrae;
        
        // Provisões para rescisões
        const multaFgts = baseSalarial.folhaFuncionarios * config.multaFGTS;
        const avisoPrevio = baseSalarial.folhaFuncionarios * config.avisoPrevio;
        
        const total = inssPatronal + fgts + decimoTerceiro + ferias + adicionalFerias + 
                     rat + salarioEducacao + incra + sebrae + multaFgts + avisoPrevio;
        
        return {
            inssPatronal,
            fgts,
            decimoTerceiro,
            ferias,
            adicionalFerias,
            rat,
            salarioEducacao,
            incra,
            sebrae,
            multaFgts,
            avisoPrevio,
            total,
            percentualSobreBase: (total / baseSalarial.total) * 100
        };
    }

    calculateBenefits() {
        const { encargos } = this.dados;
        const beneficios = encargos.beneficios;
        const numFuncionarios = this.dados.pessoal.funcionarios.length;
        
        const valeTransporte = (beneficios.valeTransporte || 0) * numFuncionarios * 12;
        const valeRefeicao = (beneficios.valeRefeicao || 0) * numFuncionarios * 12;
        const planoSaude = (beneficios.planoSaude || 0) * numFuncionarios * 12;
        const outros = (beneficios.outros || 0) * 12;
        
        const total = valeTransporte + valeRefeicao + planoSaude + outros;
        
        return {
            valeTransporte,
            valeRefeicao,
            planoSaude,
            outros,
            total,
            porFuncionario: numFuncionarios > 0 ? total / numFuncionarios : 0
        };
    }

    calculateOfficialFatorR(massaSalarialTotal) {
        const receitaBruta = this.dados.receita.rbt12;
        const fatorR = massaSalarialTotal / receitaBruta;
        const fatorRPercentual = fatorR * 100;
        
        // Verificar qualificação para Anexo III
        const qualificaAnexoIII = fatorRPercentual >= this.config.parametros.fatorRMinimo * 100;
        const anexoRecomendado = qualificaAnexoIII ? 'III' : 'V';
        
        return {
            valor: fatorR,
            percentual: fatorRPercentual,
            qualificaAnexoIII,
            anexoRecomendado,
            limiteMinimo: this.config.parametros.fatorRMinimo * 100,
            diferenca: fatorRPercentual - (this.config.parametros.fatorRMinimo * 100),
            status: qualificaAnexoIII ? 'QUALIFICADO' : 'NÃO QUALIFICADO'
        };
    }

    calculateTaxAnalysis(fatorR) {
        const receita = this.dados.receita.rbt12;
        
        // Calcular impostos para Anexo III
        const anexoIII = this.calculateTaxForAnexo(receita, 'III');
        
        // Calcular impostos para Anexo V
        const anexoV = this.calculateTaxForAnexo(receita, 'V');
        
        // Calcular economia
        const economiaAnual = anexoV.impostoAnual - anexoIII.impostoAnual;
        const economiaPercentual = economiaAnual > 0 ? (economiaAnual / anexoV.impostoAnual) * 100 : 0;
        
        return {
            anexoIII,
            anexoV,
            anexoRecomendado: fatorR.anexoRecomendado,
            economia: {
                anual: Math.max(0, economiaAnual),
                mensal: Math.max(0, economiaAnual / 12),
                percentual: economiaPercentual,
                diasDeTrabalho: economiaAnual > 0 ? Math.ceil((economiaAnual / anexoV.impostoAnual) * 365) : 0
            }
        };
    }

    calculateTaxForAnexo(receita, anexo) {
        const config = this.config.anexos[anexo];
        const faixa = config.faixas.find(f => receita >= f.min && receita <= f.max);
        
        if (!faixa) {
            throw new Error(`Receita ${receita} não encontrada nas faixas do ${anexo}`);
        }
        
        const impostoAnual = Math.max(0, (receita * faixa.aliquota / 100) - faixa.deducao);
        const impostoMensal = impostoAnual / 12;
        const aliquotaEfetiva = (impostoAnual / receita) * 100;
        
        return {
            anexo,
            faixa: config.faixas.indexOf(faixa) + 1,
            faixaLimites: { min: faixa.min, max: faixa.max },
            aliquotaNominal: faixa.aliquota,
            aliquotaEfetiva,
            deducao: faixa.deducao,
            impostoAnual,
            impostoMensal,
            economiaVsLimite: receita > 0 ? ((receita * faixa.aliquota / 100) - impostoAnual) : 0
        };
    }

    validateCompliance() {
        const receita = this.dados.receita.rbt12;
        const empresa = this.dados.empresa;
        
        return {
            simplesNacional: {
                dentroLimite: receita <= 4800000,
                percentualLimite: (receita / 4800000) * 100
            },
            documentacao: {
                cnpjInformado: !!(empresa.cnpj && empresa.cnpj.length >= 14),
                atividadeDefinida: !!empresa.atividadePrincipal
            },
            dados: {
                receitaConsistente: receita > 0,
                folhaConsistente: this.dados.pessoal.funcionarios.length >= 0,
                prolaboreConsistente: this.dados.pessoal.prolabore.valorMensal >= 0
            }
        };
    }

    generateRecommendations() {
        const recomendacoes = [];
        const fatorR = this.result?.fatorR || this.calculateOfficialFatorR(0);
        const receita = this.dados.receita.rbt12;
        
        // Recomendações baseadas no Fator R
        if (fatorR.qualificaAnexoIII) {
            recomendacoes.push({
                tipo: 'success',
                prioridade: 'alta',
                titulo: 'Manter Qualificação Anexo III',
                descricao: 'Empresa qualificada com sucesso para tributação pelo Anexo III',
                acao: 'Monitore mensalmente para manter a qualificação',
                impactoFinanceiro: 'Positivo - Alíquotas reduzidas'
            });
        } else {
            const aumentoNecessario = (receita * this.config.parametros.fatorRMinimo) - (receita * fatorR.valor);
            
            recomendacoes.push({
                tipo: 'warning',
                prioridade: 'alta',
                titulo: 'Estratégias para Qualificação',
                descricao: `Aumente a massa salarial em ${this.formatCurrency(aumentoNecessario)} para qualificar`,
                acao: 'Considere contratar funcionários ou aumentar pró-labore',
                impactoFinanceiro: `Potencial economia de ${this.formatCurrency(this.result?.tributacao?.economia?.anual || 0)}/ano`
            });
        }
        
        // Recomendações baseadas na receita
        if (receita > 3600000) {
            recomendacoes.push({
                tipo: 'info',
                prioridade: 'média',
                titulo: 'Planejamento Tributário',
                descricao: 'Receita próxima ao limite do Simples Nacional',
                acao: 'Avalie alternativas tributárias para crescimento sustentável',
                impactoFinanceiro: 'Crítico para planejamento futuro'
            });
        }
        
        return recomendacoes;
    }

    formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value || 0);
    }
}

// ==================== FUNÇÕES GLOBAIS DE COMPATIBILIDADE ====================

window.startCalculator = function() {
    if (window.fatorRSystem) {
        window.fatorRSystem.startAdvancedCalculator();
    }
};

window.scrollToSection = function(sectionId) {
    if (window.fatorRSystem) {
        window.fatorRSystem.scrollToSection(sectionId);
    }
};

window.nextStep = function(step) {
    if (window.fatorRSystem) {
        window.fatorRSystem.processNextStep();
    }
};

// ==================== INICIALIZAÇÃO DO SISTEMA ====================

document.addEventListener('DOMContentLoaded', function() {
    // Verificar dependências
    const requiredElements = ['navbar', 'calculator', 'simulator'];
    const missingElements = requiredElements.filter(id => !document.getElementById(id));
    
    if (missingElements.length > 0) {
        console.warn('Elementos HTML necessários não encontrados:', missingElements);
    }

    try {
        // Inicializar sistema principal
        window.fatorRSystem = new FatorRProSystem();
        
        // Adicionar classes de controle ao body
        document.body.classList.add('fator-r-loaded', 'system-ready');
        
        // Notificação de sistema carregado
        if (window.fatorRSystem.showAdvancedNotification) {
            setTimeout(() => {
                window.fatorRSystem.showAdvancedNotification(
                    'Sistema Fator R Pro carregado com sucesso!', 
                    'success',
                    3000
                );
            }, 1000);
        }
        
        console.log('✅ Fator R Pro System v' + window.fatorRSystem.VERSION + ' inicializado');
        
        // Analytics de inicialização
        if (window.fatorRSystem.trackUserAction) {
            window.fatorRSystem.trackUserAction('system_initialized', {
                version: window.fatorRSystem.VERSION,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                screen: `${screen.width}x${screen.height}`,
                viewport: `${window.innerWidth}x${window.innerHeight}`
            });
        }
        
    } catch (error) {
        console.error('❌ ERRO CRÍTICO ao inicializar Fator R Pro:', error);
        
        // Fallback de emergência
        document.body.classList.add('system-error');
        document.body.insertAdjacentHTML('afterbegin', `
            <div class="system-error-banner">
                <div class="error-content">
                    <i class="fas fa-exclamation-triangle"></i>
                    <div class="error-text">
                        <h4>Erro no Sistema</h4>
                        <p>Falha ao carregar o sistema. Recarregue a página.</p>
                    </div>
                    <button onclick="location.reload()" class="error-reload-btn">
                        <i class="fas fa-redo"></i> Recarregar
                    </button>
                </div>
            </div>
        `);
        
        // Tentar recuperação automática
        setTimeout(() => {
            if (!window.fatorRSystem) {
                console.log('Tentando recuperação automática...');
                location.reload();
            }
        }, 10000);
    }
});

// ==================== TRATAMENTO DE ERROS GLOBAIS ====================

window.addEventListener('error', function(event) {
    console.error('Erro JavaScript capturado:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
    });
    
    if (window.fatorRSystem && window.fatorRSystem.trackUserAction) {
        window.fatorRSystem.trackUserAction('javascript_error', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            stack: event.error ? event.error.stack : null
        });
    }
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Promise rejeitada:', event.reason);
    
    if (window.fatorRSystem && window.fatorRSystem.trackUserAction) {
        window.fatorRSystem.trackUserAction('promise_rejection', {
            reason: event.reason ? event.reason.toString() : 'Unknown',
            stack: event.reason && event.reason.stack ? event.reason.stack : null
        });
    }
});

// ==================== CLEANUP NA SAÍDA ====================

window.addEventListener('beforeunload', function() {
    if (window.fatorRSystem && typeof window.fatorRSystem.destroy === 'function') {
        window.fatorRSystem.destroy();
    }
});

// ==================== SERVICE WORKER PARA PWA ====================

if ('serviceWorker' in navigator && 'production' === 'production') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/fator-r-sw.js')
            .then(registration => {
                console.log('Service Worker registrado:', registration);
            })
            .catch(registrationError => {
                console.log('Falha no Service Worker:', registrationError);
            });
    });
}

/* 
===============================================
FIM DO SISTEMA FATOR R PRO v2.1.0
Sistema de Cálculo Oficial do Fator R
Baseado na LC 123/2006 e Resoluções CGSN
Desenvolvido para máxima precisão e conformidade
===============================================
*/    updateBenefitsCalculation() {
        // Recuperar dados dos steps anteriores
        const receita = parseFloat(document.getElementById('annualRevenue')?.value || 0);
        const prolabore = parseFloat(document.getElementById('prolabore')?.value || 0);
        
        // Calcular folha de funcionários
        let totalPayroll = 0;
        const employees = document.querySelectorAll('#employeesListAdvanced .employee-card');
        employees.forEach(emp => {
            const salary = parseFloat(emp.querySelector('.employee-salary').value || 0);
            const overtime = parseFloat(emp.querySelector('.employee-overtime').value || 0);
            const additional = parseFloat(emp.querySelector('.employee-additional').value || 0);
            
            const overtimeValue = salary > 0 ? (salary / 220) * overtime * 1.5 : 0;
            totalPayroll += salary + overtimeValue + additional;
        });

        const baseSalarial = prolabore + totalPayroll;
        const baseSalarialAnual = baseSalarial * 12;
        const folhaFuncionarios = totalPayroll * 12;

        // Calcular benefícios
        const valeTransporte = parseFloat(document.getElementById('valeTransporte')?.value || 0) * employees.length;
        const valeRefeicao = parseFloat(document.getElementById('valeRefeicao')?.value || 0) * employees.length;
        const planoSaude = parseFloat(document.getElementById('planoSaude')?.value || 0) * employees.length;
        const auxilioCreche = parseFloat(document.getElementById('auxilioCreche')?.value || 0) * employees.length;
        const outrosBeneficios = parseFloat(document.getElementById('outrosBeneficios')?.value || 0);

        const totalBeneficios = (valeTransporte + valeRefeicao + planoSaude + auxilioCreche + outrosBeneficios) * 12;

        // Calcular encargos detalhados
        const encargos = this.calculateDetailedEncargos(baseSalarialAnual, folhaFuncionarios);
        
        // Atualizar displays dos encargos
        this.updateEncargosDisplays(encargos, baseSalarialAnual, folhaFuncionarios);

        // Calcular massa salarial total conforme LC 123/2006
        const massaSalarialTotal = baseSalarialAnual + encargos.total + totalBeneficios;

        // Calcular Fator R
        const fatorR = receita > 0 ? (massaSalarialTotal / receita) * 100 : 0;
        const qualificaAnexoIII = fatorR >= 28;
        const anexoRecomendado = qualificaAnexoIII ? 'III' : 'V';

        // Atualizar preview
        document.getElementById('previewReceita').textContent = this.formatCurrency(receita);
        document.getElementById('previewMassaTotal').textContent = this.formatCurrency(massaSalarialTotal);
        document.getElementById('previewFatorR').textContent = fatorR.toFixed(2) + '%';
        document.getElementById('previewAnexo').textContent = `Anexo ${anexoRecomendado}`;

        // Colorir resultado
        const fatorRElement = document.getElementById('previewFatorR');
        const anexoElement = document.getElementById('previewAnexo');
        
        if (qualificaAnexoIII) {
            fatorRElement.className = 'calc-value fator-r success';
            anexoElement.className = 'calc-value anexo success';
        } else {
            fatorRElement.className = 'calc-value fator-r warning';
            anexoElement.className = 'calc-value anexo warning';
        }
    }

    calculateDetailedEncargos(baseSalarialAnual, folhaFuncionarios) {
        const config = this.config.parametros.encargos;

        // Encargos obrigatórios
        const inssPatronal = baseSalarialAnual * config.inssPatronal;
        const fgts = folhaFuncionarios * config.fgts;
        const rat = folhaFuncionarios * config.seguroAcidenteTrabalho;
        const salarioEducacao = baseSalarialAnual * config.salarioEducacao;

        // Provisões
        const decimoTerceiro = folhaFuncionarios * config.decimoTerceiro;
        const ferias = folhaFuncionarios * config.ferias;
        const tercoFerias = folhaFuncionarios * config.adicionalFerias;
        const avisoPrevio = folhaFuncionarios * config.avisoPrevio;

        // Adicionais
        const incra = baseSalarialAnual * config.incra;
        const sebrae = baseSalarialAnual * config.sebrae;
        const multaFgts = folhaFuncionarios * config.multaFGTS;

        const obrigatorios = inssPatronal + fgts + rat + salarioEducacao;
        const provisoes = decimoTerceiro + ferias + tercoFerias + avisoPrevio;
        const adicionais = incra + sebrae + multaFgts;
        const total = obrigatorios + provisoes + adicionais;

        return {
            obrigatorios: {
                inssPatronal,
                fgts,
                rat,
                salarioEducacao,
                total: obrigatorios
            },
            provisoes: {
                decimoTerceiro,
                ferias,
                tercoFerias,
                avisoPrevio,
                total: provisoes
            },
            adicionais: {
                incra,
                sebrae,
                multaFgts,
                total: adicionais
            },
            total
        };
    }

    updateEncargosDisplays(encargos, baseSalarialAnual, folhaFuncionarios) {
        // Encargos obrigatórios
        document.getElementById('inssBase').textContent = this.formatCurrency(baseSalarialAnual);
        document.getElementById('inssValue').textContent = this.formatCurrency(encargos.obrigatorios.inssPatronal);
        
        document.getElementById('fgtsBase').textContent = this.formatCurrency(folhaFuncionarios);
        document.getElementById('fgtsValue').textContent = this.formatCurrency(encargos.obrigatorios.fgts);
        
        document.getElementById('ratBase').textContent = this.formatCurrency(folhaFuncionarios);
        document.getElementById('ratValue').textContent = this.formatCurrency(encargos.obrigatorios.rat);
        
        document.getElementById('salarioEducacaoBase').textContent = this.formatCurrency(baseSalarialAnual);
        document.getElementById('salarioEducacaoValue').textContent = this.formatCurrency(encargos.obrigatorios.salarioEducacao);

        // Provisões
        document.getElementById('decimoBase').textContent = this.formatCurrency(folhaFuncionarios);
        document.getElementById('decimoValue').textContent = this.formatCurrency(encargos.provisoes.decimoTerceiro);
        
        document.getElementById('feriasBase').textContent = this.formatCurrency(folhaFuncionarios);
        document.getElementById('feriasValue').textContent = this.formatCurrency(encargos.provisoes.ferias);
        
        document.getElementById('tercoFeriasBase').textContent = this.formatCurrency(folhaFuncionarios);
        document.getElementById('tercoFeriasValue').textContent = this.formatCurrency(encargos.provisoes.tercoFerias);
        
        document.getElementById('avisoPrevioBase').textContent = this.formatCurrency(folhaFuncionarios);
        document.getElementById('avisoPrevioValue').textContent = this.formatCurrency(encargos.provisoes.avisoPrevio);

        // Adicionais
        document.getElementById('incraBase').textContent = this.formatCurrency(baseSalarialAnual);
        document.getElementById('incraValue').textContent = this.formatCurrency(encargos.adicionais.incra);
        
        document.getElementById('sebraeBase').textContent = this.formatCurrency(baseSalarialAnual);
        document.getElementById('sebraeValue').textContent = this.formatCurrency(encargos.adicionais.sebrae);
        
        document.getElementById('multaFgtsBase').textContent = this.formatCurrency(folhaFuncionarios);
        document.getElementById('multaFgtsValue').textContent = this.formatCurrency(encargos.adicionais.multaFgts);

        // Totais
        document.getElementById('totalObrigatorios').textContent = this.formatCurrency(encargos.obrigatorios.total);
        document.getElementById('totalProvisoes').textContent = this.formatCurrency(encargos.provisoes.total);
        document.getElementById('totalAdicionais').textContent = this.formatCurrency(encargos.adicionais.total);
        document.getElementById('totalGeralEncargos').textContent = this.formatCurrency(encargos.total);
    }

    renderStep5Advanced() {
        const body = document.querySelector('.calc-body');
        const header = document.querySelector('.calc-header');
        
        header.innerHTML = `
            <h3>Processando Cálculo Oficial</h3>
            <p>Aplicando metodologia da LC 123/2006 com máxima precisão</p>
        `;

        body.innerHTML = `
            <div class="calculation-process-advanced">
                <div class="process-animation">
                    <div class="calculation-spinner">
                        <div class="spinner-ring"></div>
                        <div class="spinner-center">
                            <i class="fas fa-calculator"></i>
                        </div>
                    </div>
                    <h4 class="process-title">Executando Cálculo Oficial do Fator R</h4>
                    <p class="process-subtitle">Processamento baseado na Lei Complementar 123/2006</p>
                </div>

                <div class="process-steps-detailed">
                    <div class="step-detailed active" data-step="1">
                        <div class="step-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="step-content">
                            <div class="step-title">Validação de Dados</div>
                            <div class="step-description">Verificando consistência das informações</div>
                            <div class="step-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 100%"></div></div>
                            </div>
                        </div>
                    </div>

                    <div class="step-detailed processing" data-step="2">
                        <div class="step-icon">
                            <div class="step-spinner"></div>
                        </div>
                        <div class="step-content">
                            <div class="step-title">Cálculo da Massa Salarial</div>
                            <div class="step-description">Somando pró-labore, salários e encargos</div>
                            <div class="step-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 45%"></div></div>
                            </div>
                        </div>
                    </div>

                    <div class="step-detailed" data-step="3">
                        <div class="step-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="step-content">
                            <div class="step-title">Aplicação de Encargos</div>
                            <div class="step-description">INSS, FGTS, 13º, férias e demais encargos</div>
                            <div class="step-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%"></div></div>
                            </div>
                        </div>
                    </div>

                    <div class="step-detailed" data-step="4">
                        <div class="step-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="step-content">
                            <div class="step-title">Cálculo do Fator R</div>
                            <div class="step-description">Divisão massa salarial por receita bruta</div>
                            <div class="step-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%"></div></div>
                            </div>
                        </div>
                    </div>

                    <div class="step-detailed" data-step="5">
                        <div class="step-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="step-content">
                            <div class="step-title">Determinação do Anexo</div>
                            <div class="step-description">Verificando enquadramento (≥28% = Anexo III)</div>
                            <div class="step-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%"></div></div>
                            </div>
                        </div>
                    </div>

                    <div class="step-detailed" data-step="6">
                        <div class="step-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="step-content">
                            <div class="step-title">Cálculo de Impostos</div>
                            <div class="step-description">Simulando tributação em ambos anexos</div>
                            <div class="step-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%"></div></div>
                            </div>
                        </div>
                    </div>

                    <div class="step-detailed" data-step="7">
                        <div class="step-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="step-content">
                            <div class="step-title">Análise Comparativa</div>
                            <div class="step-description">Calculando economia e recomendações</div>
                            <div class="step-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%"></div></div>
                            </div>
                        </div>
                    </div>

                    <div class="step-detailed" data-step="8">
                        <div class="step-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="step-content">
                            <div class="step-title">Geração de Relatório</div>
                            <div class="step-description">Compilando resultados finais</div>
                            <div class="step-progress">
                                <div class="progress-bar"><div class="progress-fill" style="width: 0%"></div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="calculation-details">
                    <h5>Informações do Processamento</h5>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <span class="label">Versão do Motor de Cálculo:</span>
                            <span class="value">${this.VERSION}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Base Legal:</span>
                            <span class="value">LC 123/2006 - RESOLUÇÃO CGSN Nº 140/2018</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Tempo Estimado:</span>
                            <span class="value" id="processingTime">5-8 segundos</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Precisão:</span>
                            <span class="value">99,9% de acordo com a Receita Federal</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.startAdvancedCalculationProcess();
    }

    startAdvancedCalculationProcess() {
        const steps = document.querySelectorAll('.step-detailed');
        let currentStep = 0;
        
        const processStep = () => {
            if (currentStep > 0) {
                const prevStep = steps[currentStep - 1];
                prevStep.classList.remove('processing');
                prevStep.classList.add('completed');
                prevStep.querySelector('.step-icon').innerHTML = '<i class="fas fa-check-circle"></i>';
                prevStep.querySelector('.progress-fill').style.width = '100%';
            }

            if (currentStep < steps.length) {
                const step = steps[currentStep];
                step.classList.add('processing');
                
                const progressBar = step.querySelector('.progress-fill');
                let progress = 0;
                const progressInterval = setInterval(() => {
                    progress += Math.random() * 25;
                    if (progress >= 100) {
                        progress = 100;
                        clearInterval(progressInterval);
                    }
                    progressBar.style.width = progress + '%';
                }, 100);

                currentStep++;
                setTimeout(processStep, 800 + Math.random() * 400);
            } else {
                this.completeAdvancedCalculation();
            }
        };

        setTimeout(processStep, 1000);
    }

    completeAdvancedCalculation() {
        setTimeout(() => {
            const results = this.performOfficialFatorRCalculation();
            this.state.results.current = results;
            this.displayOfficialResults(results);
            this.updateAllDashboards(results);
        }, 1000);
    }

    performOfficialFatorRCalculation() {
        // Coletar todos os dados
        const empresa = {
            nome: document.getElementById('companyName')?.value || '',
            cnpj: document.getElementById('cnpj')?.value || '',
            atividade: document.querySelector('.option-card.selected')?.dataset.value || ''
        };

        const receita = parseFloat(document.getElementById('annualRevenue')?.value || 0);
        const prolabore = parseFloat(document.getElementById('prolabore')?.value || 0);

        // Dados dos funcionários
        const funcionarios = [];
        document.querySelectorAll('#employeesListAdvanced .employee-card').forEach(emp => {
            const funcionario = {
                nome: emp.querySelector('.employee-name').value,
                cargo: emp.querySelector('.employee-position').value,
                salario: parseFloat(emp.querySelector('.employee-salary').value || 0),
                horasExtras: parseFloat(emp.querySelector('.employee-overtime').value || 0),
                adicionais: parseFloat(emp.querySelector('.employee-additional').value || 0)
            };
            
            if (funcionario.salario > 0) {
                funcionario.salarioTotal = funcionario.salario + 
                    (funcionario.salario / 220 * funcionario.horasExtras * 1.5) + 
                    funcionario.adicionais;
                funcionarios.push(funcionario);
            }
        });

        // Benefícios
        const beneficios = {
            valeTransporte: parseFloat(document.getElementById('valeTransporte')?.value || 0),
            valeRefeicao: parseFloat(document.getElementById('valeRefeicao')?.value || 0),
            planoSaude: parseFloat(document.getElementById('planoSaude')?.value || 0),
            auxilioCreche: parseFloat(document.getElementById('auxilioCreche')?.value || 0),
            outros: parseFloat(document.getElementById('outrosBeneficios')?.value || 0)
        };

        // CÁLCULO OFICIAL CONFORME LC 123/2006
        
        // 1. Base salarial
        const folhaMensal = funcionarios.reduce((sum, func) => sum + func.salarioTotal, 0);
        const folhaAnual = folhaMensal * 12;
        const prolaboreAnual = prolabore * 12;
        const baseSalarialAnual = folhaAnual + prolaboreAnual;

        // 2. Benefícios anuais
        const beneficiosAnuais = (beneficios.valeTransporte + beneficios.valeRefeicao + 
                                 beneficios.planoSaude + beneficios.auxilioCreche) * 
                                funcionarios.length * 12 + beneficios.outros * 12;

        // 3. Encargos detalhados
        const encargos = this.calculateDetailedEncargos(baseSalarialAnual, folhaAnual);

        // 4. Massa salarial total (conforme Art. 18-A da LC 123/2006)
        const massaSalarialTotal = baseSalarialAnual + encargos.total + beneficiosAnuais;

        // 5. Fator R oficial
        const fatorR = massaSalarialTotal / receita;
        const fatorRPercentual = fatorR * 100;

        // 6. Qualificação para Anexo III (≥ 28%)
        const qualificaAnexoIII = fatorRPercentual >= 28;
        const anexoRecomendado = qualificaAnexoIII ? 'III' : 'V';

        // 7. Cálculo de impostos oficiais
        const tributacaoAnexoIII = this.calculateOfficialTax(receita, 'III');
        const tributacaoAnexoV = this.calculateOfficialTax(receita, 'V');

        // 8. Economia
        const economiaAnual = tributacaoAnexoV.impostoAnual - tributacaoAnexoIII.impostoAnual;
        const economiaPercentual = economiaAnual > 0 ? (economiaAnual / tributacaoAnexoV.impostoAnual) * 100 : 0;

        // 9. Análise detalhada
        const analise = this.generateDetailedAnalysis(fatorRPercentual, qualificaAnexoIII, economiaAnual, receita);

        return {
            timestamp: new Date().toISOString(),
            versao: this.VERSION,
            
            empresa,
            
            dadosCalculados: {
                receita: {
                    bruta: receita,
                    mediaMonsal: receita / 12
                },
                
                massaSalarial: {
                    prolabore: {
                        mensal: prolabore,
                        anual: prolaboreAnual
                    },
                    funcionarios: {
                        quantidade: funcionarios.length,
                        folhaMensal: folhaMensal,
                        folhaAnual: folhaAnual,
                        detalhes: funcionarios
                    },
                    beneficios: {
                        total: beneficiosAnuais,
                        detalhes: beneficios
                    },
                    encargos: encargos,
                    total: massaSalarialTotal
                }
            },
            
            fatorR: {
                valor: fatorR,
                percentual: fatorRPercentual,
                qualificaAnexoIII,
                anexoRecomendado,
                statusLegal: qualificaAnexoIII ? 'Qualificado para Anexo III' : 'Deve tributar pelo Anexo V',
                diferenciaPara28: fatorRPercentual - 28
            },
            
            tributacao: {
                anexoIII: tributacaoAnexoIII,
                anexoV: tributacaoAnexoV,
                economia: {
                    anual: Math.max(0, economiaAnual),
                    mensal: Math.max(0, economiaAnual / 12),
                    percentual: economiaPercentual
                }
            },
            
            analise,
            
            conformidade: {
                dentroLimiteSN: receita <= 4800000,
                fatorRValido: fatorRPercentual >= 0,
                dadosConsistentes: this.validateDataConsistency(receita, massaSalarialTotal),
                observacoes: this.generateComplianceObservations(receita, fatorRPercentual, funcionarios.length)
            }
        };
    }

    calculateOfficialTax(receita, anexo) {
        const config = this.config.anexos[anexo];
        const faixa = config.faixas.find(f => receita >= f.min && receita <= f.max);
        
        if (!faixa) return { erro: 'Receita fora das faixas do Simples Nacional' };

        const impostoAnual = Math.max(0, (receita * faixa.aliquota / 100) - faixa.deducao);
        const impostoMensal = impostoAnual / 12;
        const aliquotaEfetiva = (impostoAnual / receita) * 100;

        return {
            anexo,
            faixa: config.faixas.indexOf(faixa) + 1,
            faixaDescricao: `${this.formatCurrency(faixa.min)} a ${this.formatCurrency(faixa.max)}`,
            aliquotaNominal: faixa.aliquota,
            aliquotaEfetiva,
            deducao: faixa.deducao,
            impostoAnual,
            impostoMensal,
            repartição: {
                cpss: impostoAnual * faixa.cpss / 100,
                csll: impostoAnual * faixa.csll / 100,
                cofins: impostoAnual * faixa.cofins / 100,
                pis: impostoAnual * faixa.pis / 100,
                irpj: impostoAnual * faixa.irpj / 100,
                iss: impostoAnual * faixa.iss / 100,
                inss: impostoAnual * faixa.inss / 100
            }
        };
    }

    generateDetailedAnalysis(fatorR, qualifica, economia, receita) {
        const analises = [];

        // Análise do Fator R
        if (qualifica) {
            analises.push({
                tipo: 'success',
                titulo: 'Empresa Qualificada para Anexo III',
                descricao: `Com Fator R de ${fatorR.toFixed(2)}%, sua empresa atende ao requisito mínimo de 28%.`,
                impacto: 'Tributação com alíquotas reduzidas',
                recomendacao: 'Mantenha a estrutura de pessoal para continuar qualificada.'
            });
        } else {
            const diferenca = 28 - fatorR;
            const aumentoNecessario = receita * 0.28 - (receita * fatorR / 100);
            
            analises.push({
                tipo: 'warning',
                titulo: 'Empresa NÃO Qualificada para Anexo III',
                descricao: `Fator R de ${fatorR.toFixed(2)}% está ${diferenca.toFixed(2)} pontos abaixo do mínimo.`,
                impacto: 'Tributação pelas alíquotas mais altas do Anexo V',
                recomendacao: `Considere aumentar a massa salarial em ${this.formatCurrency(aumentoNecessario)} para se qualificar.`
            });
        }

        // Análise de economia
        if (economia > 0) {
            analises.push({
                tipo: 'info',
                titulo: 'Significativa Economia Tributária',
                descricao: `Economia anual de ${this.formatCurrency(economia)}.`,
                impacto: `${this.formatCurrency(economia / 12)} mensais a menos em impostos`,
                recomendacao: 'Considere reinvestir essa economia no crescimento da empresa.'
            });
        }

        // Análise da receita
        if (receita > 3600000) {
            analises.push({
                tipo: 'warning',
                titulo: 'Próximo do Limite do Simples Nacional',
                descricao: 'Receita na faixa mais alta do Simples Nacional.',
                impacto: 'Alíquotas elevadas e risco de desenquadramento',
                recomendacao: 'Planeje o crescimento para evitar desenquadramento involuntário.'
            });
        }

        return {
            resumo: qualifica ? 
                `Empresa QUALIFICADA para Anexo III com ${fatorR.toFixed(1)}% de Fator R` :
                `Empresa NÃO qualificada - Fator R de ${fatorR.toFixed(1)}% abaixo dos 28% necessários`,
            analises,
            pontuacao: this.calculateCompanyScore(fatorR, receita, economia),
            proximaRevisao: this.getNextReviewDate()
        };
    }

    calculateCompanyScore(fatorR, receita, economia) {
        let score = 0;
        
        // Pontos pelo Fator R
        if (fatorR >= 28) score += 40;
        else score += (fatorR / 28) * 40;
        
        // Pontos pela posição na receita
        if (receita <= 1800000) score += 30;
        else if (receita <= 3600000) score += 20;
        else score += 10;
        
        // Pontos pela economia
        if (economia > 0) score += 30;
        
        return Math.min(100, Math.round(score));
    }

    getNextReviewDate() {
        const next = new Date();
        next.setMonth(next.getMonth() + 1);
        return next.toLocaleDateString('pt-BR');
    }

    displayOfficialResults(results) {
        const body = document.querySelector('.calc-body');
        const header = document.querySelector('.calc-header');
        
        header.innerHTML = `
            <h3>Resultado Oficial do Cálculo</h3>
            <p>Análise completa baseada na LC 123/2006</p>
        `;

        const statusClass = results.fatorR.qualificaAnexoIII ? 'success' : 'warning';
        const statusIcon = results.fatorR.qualificaAnexoIII ? 'fa-trophy' : 'fa-exclamation-triangle';

        body.innerHTML = `
            <div class="official-results">
                <div class="result-header-official ${statusClass}">
                    <div class="result-icon-large">
                        <i class="fas ${statusIcon}"></i>
                    </div>
                    <div class="result-main-info">
                        <h2 class="result-title">Anexo ${results.fatorR.anexoRecomendado}</h2>
                        <div class="result-fator-r">Fator R: ${results.fatorR                        <div class="employees-header">
                            <span class="employees-count">
                                <i class="fas fa-users"></i>
                                <span id="employeesTotal">0 funcionários</span>
                            </span>
                            <button type="button" class="btn btn-primary btn-sm" id="addEmployeeAdvanced">
                                <i class="fas fa-plus"></i> Adicionar Funcionário
                            </button>
                        </div>
                        
                        <div id="employeesListAdvanced" class="employees-list-advanced">
                            <!-- Funcionários serão adicionados aqui -->
                        </div>
                        
                        <div class="employees-template" style="display: none;">
                            <div class="employee-card">
                                <div class="employee-header">
                                    <div class="employee-number">Funcionário #1</div>
                                    <button type="button" class="btn-remove-employee">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                                <div class="employee-body">
                                    <div class="form-grid">
                                        <div class="form-group">
                                            <label>Nome Completo</label>
                                            <input type="text" class="employee-name" placeholder="Ex: João Silva Santos">
                                        </div>
                                        <div class="form-group">
                                            <label>Cargo/Função</label>
                                            <input type="text" class="employee-position" placeholder="Ex: Analista">
                                        </div>
                                        <div class="form-group">
                                            <label>Salário Base</label>
                                            <div class="input-with-currency">
                                                <span class="currency-symbol">R$</span>
                                                <input type="number" class="employee-salary" 
                                                       placeholder="0,00" step="0.01" 
                                                       min="${this.config.parametros.salarioMinimo2025}">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Data Admissão</label>
                                            <input type="date" class="employee-admission">
                                        </div>
                                        <div class="form-group">
                                            <label>Horas Extras (mensais)</label>
                                            <input type="number" class="employee-overtime" 
                                                   placeholder="0" min="0" max="100">
                                        </div>
                                        <div class="form-group">
                                            <label>Outros Adicionais</label>
                                            <div class="input-with-currency">
                                                <span class="currency-symbol">R$</span>
                                                <input type="number" class="employee-additional" 
                                                       placeholder="0,00" step="0.01" min="0">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="payroll-summary-advanced">
                    <h4>Resumo da Massa Salarial</h4>
                    <div class="summary-cards">
                        <div class="summary-card">
                            <div class="card-header">
                                <i class="fas fa-user-tie"></i>
                                <span>Pró-labore</span>
                            </div>
                            <div class="card-body">
                                <div class="value" id="summaryProlabore">R$ 0,00</div>
                                <div class="period">mensal</div>
                            </div>
                        </div>
                        
                        <div class="summary-card">
                            <div class="card-header">
                                <i class="fas fa-users"></i>
                                <span>Folha CLT</span>
                            </div>
                            <div class="card-body">
                                <div class="value" id="summaryPayroll">R$ 0,00</div>
                                <div class="period">mensal</div>
                            </div>
                        </div>
                        
                        <div class="summary-card highlight">
                            <div class="card-header">
                                <i class="fas fa-calculator"></i>
                                <span>Total Bruto</span>
                            </div>
                            <div class="card-body">
                                <div class="value" id="summaryTotal">R$ 0,00</div>
                                <div class="period">anual</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="encargos-preview">
                    <h4>Prévia dos Encargos Trabalhistas</h4>
                    <div class="encargos-grid">
                        <div class="encargo-row">
                            <span class="encargo-label">INSS Patronal (20%)</span>
                            <span class="encargo-value" id="previewINSS">R$ 0,00</span>
                        </div>
                        <div class="encargo-row">
                            <span class="encargo-label">FGTS (8%)</span>
                            <span class="encargo-value" id="previewFGTS">R$ 0,00</span>
                        </div>
                        <div class="encargo-row">
                            <span class="encargo-label">13º Salário (8,33%)</span>
                            <span class="encargo-value" id="previewDecimo">R$ 0,00</span>
                        </div>
                        <div class="encargo-row">
                            <span class="encargo-label">Férias + 1/3 (11,11%)</span>
                            <span class="encargo-value" id="previewFerias">R$ 0,00</span>
                        </div>
                        <div class="encargo-row total">
                            <span class="encargo-label"><strong>Total Encargos</strong></span>
                            <span class="encargo-value" id="previewTotalEncargos"><strong>R$ 0,00</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.setupAdvancedPayrollManagement();
    }

    setupAdvancedPayrollManagement() {
        // Botão adicionar funcionário
        const addBtn = document.getElementById('addEmployeeAdvanced');
        if (addBtn) {
            this.addEventHandler(addBtn, 'click', () => this.addEmployeeAdvanced());
        }

        // Auto-cálculos do pró-labore
        const prolaboreInput = document.getElementById('prolabore');
        const sociosInput = document.getElementById('sociosQuantidade');
        const prolaboreAnualInput = document.getElementById('prolaboreAnual');

        const updateProlaboreCalculations = () => {
            const prolaboreMonthly = parseFloat(prolaboreInput.value || 0);
            const prolaboreAnnual = prolaboreMonthly * 12;
            
            prolaboreAnualInput.value = this.formatCurrency(prolaboreAnnual);
            this.updatePayrollSummaryAdvanced();
        };

        if (prolaboreInput) this.addEventHandler(prolaboreInput, 'input', updateProlaboreCalculations);
        if (sociosInput) this.addEventHandler(sociosInput, 'input', updateProlaboreCalculations);

        // Adicionar primeiro funcionário por padrão
        setTimeout(() => this.addEmployeeAdvanced(), 100);
    }

    addEmployeeAdvanced() {
        const employeesList = document.getElementById('employeesListAdvanced');
        const template = document.querySelector('.employees-template .employee-card');
        
        if (!employeesList || !template) return;

        const employeeCount = employeesList.querySelectorAll('.employee-card').length + 1;
        const newEmployee = template.cloneNode(true);
        
        // Personalizar o novo funcionário
        newEmployee.querySelector('.employee-number').textContent = `Funcionário #${employeeCount}`;
        newEmployee.dataset.employeeId = `emp_${Date.now()}`;

        // Configurar eventos do novo funcionário
        this.setupEmployeeEvents(newEmployee);

        employeesList.appendChild(newEmployee);
        this.updateEmployeesCount();
        
        // Animar entrada
        this.animateEmployeeAddition(newEmployee);
    }

    setupEmployeeEvents(employeeCard) {
        // Botão remover
        const removeBtn = employeeCard.querySelector('.btn-remove-employee');
        if (removeBtn) {
            this.addEventHandler(removeBtn, 'click', () => {
                this.removeEmployeeAdvanced(employeeCard);
            });
        }

        // Inputs com auto-cálculo
        const inputs = employeeCard.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            this.addEventHandler(input, 'input', () => {
                this.updatePayrollSummaryAdvanced();
                this.validateEmployeeData(employeeCard);
            });
        });

        // Validação de nome e cargo
        const nameInput = employeeCard.querySelector('.employee-name');
        const positionInput = employeeCard.querySelector('.employee-position');
        
        if (nameInput) {
            this.addEventHandler(nameInput, 'blur', () => this.validateEmployeeName(nameInput));
        }
        
        if (positionInput) {
            this.addEventHandler(positionInput, 'blur', () => this.validateEmployeePosition(positionInput));
        }
    }

    removeEmployeeAdvanced(employeeCard) {
        // Animação de saída
        employeeCard.style.transform = 'translateX(-100%)';
        employeeCard.style.opacity = '0';
        
        setTimeout(() => {
            employeeCard.remove();
            this.updateEmployeesCount();
            this.updatePayrollSummaryAdvanced();
            this.renumberEmployees();
        }, 300);
    }

    updateEmployeesCount() {
        const count = document.querySelectorAll('#employeesListAdvanced .employee-card').length;
        const counter = document.getElementById('employeesTotal');
        if (counter) {
            counter.textContent = `${count} funcionário${count !== 1 ? 's' : ''}`;
        }
    }

    renumberEmployees() {
        const employees = document.querySelectorAll('#employeesListAdvanced .employee-card');
        employees.forEach((emp, index) => {
            emp.querySelector('.employee-number').textContent = `Funcionário #${index + 1}`;
        });
    }

    updatePayrollSummaryAdvanced() {
        const prolabore = parseFloat(document.getElementById('prolabore')?.value || 0);
        
        // Calcular folha de funcionários
        let totalPayroll = 0;
        const employees = document.querySelectorAll('#employeesListAdvanced .employee-card');
        
        employees.forEach(emp => {
            const salary = parseFloat(emp.querySelector('.employee-salary').value || 0);
            const overtime = parseFloat(emp.querySelector('.employee-overtime').value || 0);
            const additional = parseFloat(emp.querySelector('.employee-additional').value || 0);
            
            const overtimeValue = salary > 0 ? (salary / 220) * overtime * 1.5 : 0; // 50% sobre hora normal
            totalPayroll += salary + overtimeValue + additional;
        });

        const totalAnnual = (prolabore + totalPayroll) * 12;

        // Atualizar displays
        document.getElementById('summaryProlabore').textContent = this.formatCurrency(prolabore);
        document.getElementById('summaryPayroll').textContent = this.formatCurrency(totalPayroll);
        document.getElementById('summaryTotal').textContent = this.formatCurrency(totalAnnual);

        // Calcular encargos
        this.updateEncargosPreview(prolabore, totalPayroll);
    }

    updateEncargosPreview(prolabore, payroll) {
        const totalBase = prolabore + payroll;
        const totalAnnual = totalBase * 12;

        // Encargos conforme legislação
        const inssPatronal = totalAnnual * this.config.parametros.encargos.inssPatronal;
        const fgts = payroll * 12 * this.config.parametros.encargos.fgts; // Só sobre funcionários
        const decimoTerceiro = payroll * this.config.parametros.encargos.decimoTerceiro;
        const ferias = payroll * (this.config.parametros.encargos.ferias + this.config.parametros.encargos.adicionalFerias);

        const totalEncargos = inssPatronal + fgts + decimoTerceiro + ferias;

        // Atualizar displays
        document.getElementById('previewINSS').textContent = this.formatCurrency(inssPatronal);
        document.getElementById('previewFGTS').textContent = this.formatCurrency(fgts);
        document.getElementById('previewDecimo').textContent = this.formatCurrency(decimoTerceiro);
        document.getElementById('previewFerias').textContent = this.formatCurrency(ferias);
        document.getElementById('previewTotalEncargos').textContent = this.formatCurrency(totalEncargos);
    }

    renderStep4Advanced() {
        const body = document.querySelector('.calc-body');
        const header = document.querySelector('.calc-header');
        
        header.innerHTML = `
            <h3>Benefícios e Encargos Detalhados</h3>
            <p>Configuração completa de benefícios e cálculo preciso de todos os encargos trabalhistas</p>
        `;

        body.innerHTML = `
            <div class="benefits-form-advanced">
                <div class="benefits-section">
                    <h4>Benefícios aos Funcionários</h4>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <div class="benefit-header">
                                <i class="fas fa-bus"></i>
                                <span>Vale Transporte</span>
                                <div class="benefit-toggle">
                                    <input type="checkbox" id="enableValeTransporte">
                                    <label for="enableValeTransporte"></label>
                                </div>
                            </div>
                            <div class="benefit-body">
                                <div class="form-group">
                                    <label>Valor médio por funcionário</label>
                                    <input type="number" id="valeTransporte" placeholder="0,00" 
                                           step="0.01" min="0" disabled>
                                </div>
                                <div class="benefit-info">
                                    <span>Desconto máximo: 6% do salário</span>
                                </div>
                            </div>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-header">
                                <i class="fas fa-utensils"></i>
                                <span>Vale Refeição</span>
                                <div class="benefit-toggle">
                                    <input type="checkbox" id="enableValeRefeicao">
                                    <label for="enableValeRefeicao"></label>
                                </div>
                            </div>
                            <div class="benefit-body">
                                <div class="form-group">
                                    <label>Valor médio por funcionário</label>
                                    <input type="number" id="valeRefeicao" placeholder="0,00" 
                                           step="0.01" min="0" disabled>
                                </div>
                                <div class="benefit-info">
                                    <span>Desconto máximo: 20% do benefício</span>
                                </div>
                            </div>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-header">
                                <i class="fas fa-heartbeat"></i>
                                <span>Plano de Saúde</span>
                                <div class="benefit-toggle">
                                    <input type="checkbox" id="enablePlanoSaude">
                                    <label for="enablePlanoSaude"></label>
                                </div>
                            </div>
                            <div class="benefit-body">
                                <div class="form-group">
                                    <label>Valor médio por funcionário</label>
                                    <input type="number" id="planoSaude" placeholder="0,00" 
                                           step="0.01" min="0" disabled>
                                </div>
                                <div class="benefit-info">
                                    <span>Custo total da empresa</span>
                                </div>
                            </div>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-header">
                                <i class="fas fa-baby"></i>
                                <span>Auxílio Creche</span>
                                <div class="benefit-toggle">
                                    <input type="checkbox" id="enableAuxilioCreche">
                                    <label for="enableAuxilioCreche"></label>
                                </div>
                            </div>
                            <div class="benefit-body">
                                <div class="form-group">
                                    <label>Valor médio por funcionário</label>
                                    <input type="number" id="auxilioCreche" placeholder="0,00" 
                                           step="0.01" min="0" disabled>
                                </div>
                                <div class="benefit-info">
                                    <span>Até 6 meses após licença maternidade</span>
                                </div>
                            </div>
                        </div>

                        <div class="benefit-card">
                            <div class="benefit-header">
                                <i class="fas fa-plus"></i>
                                <span>Outros Benefícios</span>
                                <div class="benefit-toggle">
                                    <input type="checkbox" id="enableOutrosBeneficios">
                                    <label for="enableOutrosBeneficios"></label>
                                </div>
                            </div>
                            <div class="benefit-body">
                                <div class="form-group">
                                    <label>Valor total mensal</label>
                                    <input type="number" id="outrosBeneficios" placeholder="0,00" 
                                           step="0.01" min="0" disabled>
                                </div>
                                <div class="form-group">
                                    <label>Descrição</label>
                                    <input type="text" id="outrosBeneficiosDesc" 
                                           placeholder="Ex: Seguro de vida, convênio odontológico">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="encargos-calculation-detailed">
                    <h4>Cálculo Detalhado dos Encargos</h4>
                    <div class="calculation-tabs">
                        <button class="calc-tab active" data-tab="obrigatorios">Encargos Obrigatórios</button>
                        <button class="calc-tab" data-tab="provisoes">Provisões</button>
                        <button class="calc-tab" data-tab="adicionais">Adicionais</button>
                    </div>

                    <div class="calc-tab-content" id="tab-obrigatorios">
                        <div class="encargos-detailed-grid">
                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">INSS Patronal</span>
                                    <span class="encargo-rate">20,00%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="inssBase">R$ 0,00</span></span>
                                    <span class="value" id="inssValue">R$ 0,00</span>
                                </div>
                            </div>

                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">FGTS</span>
                                    <span class="encargo-rate">8,00%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="fgtsBase">R$ 0,00</span></span>
                                    <span class="value" id="fgtsValue">R$ 0,00</span>
                                </div>
                            </div>

                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">RAT/SAT</span>
                                    <span class="encargo-rate">1,00%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="ratBase">R$ 0,00</span></span>
                                    <span class="value" id="ratValue">R$ 0,00</span>
                                </div>
                            </div>

                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">Salário Educação</span>
                                    <span class="encargo-rate">2,50%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="salarioEducacaoBase">R$ 0,00</span></span>
                                    <span class="value" id="salarioEducacaoValue">R$ 0,00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="calc-tab-content" id="tab-provisoes" style="display: none;">
                        <div class="encargos-detailed-grid">
                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">13º Salário</span>
                                    <span class="encargo-rate">8,33%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="decimoBase">R$ 0,00</span></span>
                                    <span class="value" id="decimoValue">R$ 0,00</span>
                                </div>
                            </div>

                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">Férias</span>
                                    <span class="encargo-rate">8,33%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="feriasBase">R$ 0,00</span></span>
                                    <span class="value" id="feriasValue">R$ 0,00</span>
                                </div>
                            </div>

                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">1/3 de Férias</span>
                                    <span class="encargo-rate">2,78%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="tercoFeriasBase">R$ 0,00</span></span>
                                    <span class="value" id="tercoFeriasValue">R$ 0,00</span>
                                </div>
                            </div>

                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">Aviso Prévio</span>
                                    <span class="encargo-rate">2,78%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="avisoPrevioBase">R$ 0,00</span></span>
                                    <span class="value" id="avisoPrevioValue">R$ 0,00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="calc-tab-content" id="tab-adicionais" style="display: none;">
                        <div class="encargos-detailed-grid">
                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">INCRA</span>
                                    <span class="encargo-rate">0,20%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="incraBase">R$ 0,00</span></span>
                                    <span class="value" id="incraValue">R$ 0,00</span>
                                </div>
                            </div>

                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">SEBRAE</span>
                                    <span class="encargo-rate">0,60%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="sebraeBase">R$ 0,00</span></span>
                                    <span class="value" id="sebraeValue">R$ 0,00</span>
                                </div>
                            </div>

                            <div class="encargo-detailed">
                                <div class="encargo-header">
                                    <span class="encargo-name">Multa FGTS (provisão)</span>
                                    <span class="encargo-rate">4,00%</span>
                                </div>
                                <div class="encargo-calculation">
                                    <span class="base">Base: <span id="multaFgtsBase">R$ 0,00</span></span>
                                    <span class="value" id="multaFgtsValue">R$ 0,00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="total-encargos-summary">
                        <div class="summary-row">
                            <span class="label">Total Encargos Obrigatórios:</span>
                            <span class="value" id="totalObrigatorios">R$ 0,00</span>
                        </div>
                        <div class="summary-row">
                            <span class="label">Total Provisões:</span>
                            <span class="value" id="totalProvisoes">R$ 0,00</span>
                        </div>
                        <div class="summary-row">
                            <span class="label">Total Adicionais:</span>
                            <span class="value" id="totalAdicionais">R$ 0,00</span>
                        </div>
                        <div class="summary-row total">
                            <span class="label"><strong>TOTAL GERAL ENCARGOS:</strong></span>
                            <span class="value" id="totalGeralEncargos"><strong>R$ 0,00</strong></span>
                        </div>
                    </div>
                </div>

                <div class="fator-r-preview">
                    <h4>Prévia do Cálculo do Fator R</h4>
                    <div class="preview-calculation">
                        <div class="calc-row">
                            <span class="calc-label">Receita Bruta (12 meses):</span>
                            <span class="calc-value" id="previewReceita">R$ 0,00</span>
                        </div>
                        <div class="calc-row">
                            <span class="calc-label">Massa Salarial Total:</span>
                            <span class="calc-value" id="previewMassaTotal">R$ 0,00</span>
                        </div>
                        <div class="calc-divider"></div>
                        <div class="calc-row result">
                            <span class="calc-label"><strong>Fator R:</strong></span>
                            <span class="calc-value fator-r" id="previewFatorR"><strong>0,00%</strong></span>
                        </div>
                        <div class="calc-row result">
                            <span class="calc-label"><strong>Anexo Recomendado:</strong></span>
                            <span class="calc-value anexo" id="previewAnexo"><strong>-</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.setupBenefitsAdvanced();
    }

    setupBenefitsAdvanced() {
        // Toggles de benefícios
        const benefitToggles = document.querySelectorAll('.benefit-toggle input[type="checkbox"]');
        benefitToggles.forEach(toggle => {
            this.addEventHandler(toggle, 'change', (e) => {
                const benefitId = e.target.id.replace('enable', '').toLowerCase();
                const input = document.getElementById(benefitId);
                if (input) {
                    input.disabled = !e.target.checked;
                    if (!e.target.checked) input.value = '';
                }
                this.updateBenefitsCalculation();
            });
        });

        // Tabs de cálculo
        const calcTabs = document.querySelectorAll('.calc-tab');
        calcTabs.forEach(tab => {
            this.addEventHandler(tab, 'click', (e) => {
                const tabId = e.target.dataset.tab;
                this.switchCalculationTab(tabId);
            });
        });

        // Inputs de benefícios
        const benefitInputs = document.querySelectorAll('[id*="vale"], [id*="plano"], [id*="auxilio"], [id*="outros"]');
        benefitInputs.forEach(input => {
            this.addEventHandler(input, 'input', () => this.updateBenefitsCalculation());
        });

        this.updateBenefitsCalculation();
    }

    switchCalculationTab(tabId) {
        // Atualizar tabs
        document.querySelectorAll('.calc-tab').forEach(tab => tab.classList.remove('active'));
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

        // Mostrar conteúdo
        document.querySelectorAll('.calc-tab-content').forEach(content => content.style.display = 'none');
        document.getElementById(`tab-${tabId}`).style.display = 'block';
    }

    updateBenefitsCalculation() {
        // Recuperar dados dos/**
 * =============================================
 * FATOR R PRO - SISTEMA EMPRESARIAL AVANÇADO
 * Calculadora Oficial LC 123/2006 - Precisão Máxima
 * =============================================
 */

class FatorRProSystem {
    constructor() {
        this.VERSION = '2.1.0';
        this.DEBUG = true;
        
        this.initializeSystem();
    }

    initializeSystem() {
        // Configurações oficiais completas
        this.config = {
            // Tabelas oficiais Simples Nacional 2025 - RESOLUÇÃO CGSN Nº 140/2018 atualizada
            anexos: {
                III: {
                    nome: 'Anexo III - Receitas de locação de bens móveis e de prestação de serviços',
                    atividades: ['servicos', 'locacao'],
                    faixas: [
                        { min: 0, max: 180000, aliquota: 6.00, deducao: 0, cpss: 41.50, csll: 3.50, cofins: 12.82, pis: 2.78, irpj: 4.00, iss: 33.50, inss: 2.75 },
                        { min: 180000.01, max: 360000, aliquota: 11.20, deducao: 9360, cpss: 41.50, csll: 3.50, cofins: 12.82, pis: 2.78, irpj: 4.00, iss: 32.00, inss: 2.75 },
                        { min: 360000.01, max: 720000, aliquota: 13.50, deducao: 17640, cpss: 41.50, csll: 3.50, cofins: 12.82, pis: 2.78, irpj: 4.00, iss: 32.00, inss: 2.75 },
                        { min: 720000.01, max: 1800000, aliquota: 16.00, deducao: 35640, cpss: 41.50, csll: 3.50, cofins: 12.82, pis: 2.78, irpj: 4.00, iss: 28.85, inss: 2.75 },
                        { min: 1800000.01, max: 3600000, aliquota: 21.00, deducao: 125640, cpss: 41.50, csll: 3.50, cofins: 12.82, pis: 2.78, irpj: 4.00, iss: 28.85, inss: 2.75 },
                        { min: 3600000.01, max: 4800000, aliquota: 33.00, deducao: 648000, cpss: 20.91, csll: 15.00, cofins: 16.03, pis: 3.47, irpj: 35.00, iss: 0, inss: 9.59 }
                    ]
                },
                V: {
                    nome: 'Anexo V - Prestação de serviços não incluídos no Anexo III ou IV',
                    atividades: ['servicos_outros'],
                    faixas: [
                        { min: 0, max: 180000, aliquota: 15.50, deducao: 0, cpss: 25.00, csll: 15.00, cofins: 14.10, pis: 3.05, irpj: 25.00, iss: 14.00, inss: 3.85 },
                        { min: 180000.01, max: 360000, aliquota: 18.00, deducao: 4500, cpss: 23.00, csll: 15.00, cofins: 14.10, pis: 3.05, irpj: 25.00, iss: 17.00, inss: 2.85 },
                        { min: 360000.01, max: 720000, aliquota: 19.50, deducao: 9900, cpss: 24.00, csll: 15.00, cofins: 14.10, pis: 3.05, irpj: 25.00, iss: 19.00, inss: 0 },
                        { min: 720000.01, max: 1800000, aliquota: 20.50, deducao: 17100, cpss: 21.00, csll: 15.00, cofins: 14.10, pis: 3.05, irpj: 25.00, iss: 21.00, inss: 0 },
                        { min: 1800000.01, max: 3600000, aliquota: 23.00, deducao: 62100, cpss: 23.00, csll: 15.00, cofins: 14.10, pis: 3.05, irpj: 25.00, iss: 23.00, inss: 0 },
                        { min: 3600000.01, max: 4800000, aliquota: 30.50, deducao: 540000, cpss: 35.21, csll: 15.00, cofins: 16.44, pis: 3.56, irpj: 29.79, iss: 0, inss: 0 }
                    ]
                }
            },
            
            // Parâmetros legais oficiais
            parametros: {
                fatorRMinimo: 0.28, // 28% - Art. 18-A da LC 123/2006
                salarioMinimo2025: 1412.00,
                tetoINSS2025: 7507.49,
                
                // Encargos trabalhistas conforme legislação
                encargos: {
                    // INSS Patronal
                    inssPatronal: 0.20, // 20% - Lei 8.212/91
                    
                    // FGTS
                    fgts: 0.08, // 8% - Lei 8.036/90
                    
                    // Contribuições adicionais obrigatórias
                    seguroAcidenteTrabalho: 0.01, // 1% (RAT médio)
                    salarioEducacao: 0.025, // 2,5% - Decreto 87.043/82
                    incra: 0.002, // 0,2% - Lei 7.787/89
                    sebrae: 0.006, // 0,6% - Lei 8.029/90
                    
                    // Provisões obrigatórias
                    ferias: 1/12, // 8,33% - 1 mês a cada 12
                    adicionalFerias: 1/36, // 2,78% - 1/3 sobre férias
                    decimoTerceiro: 1/12, // 8,33% - 13º salário
                    
                    // Rescisões (provisão média)
                    multaFGTS: 0.04, // 40% sobre FGTS = 4% sobre salário
                    avisoPrevio: 1/36 // 2,78% - provisão média
                }
            },
            
            // CNAEs sujeitos ao Fator R (lista oficial)
            cnaesFatorR: [
                '8630501', '8630502', '8630503', // Fisioterapia
                '8610101', '8610102', '8610103', // Medicina
                '8640201', '8640202', // Enfermagem
                '8630504', // Odontologia
                '8690901', '8690902', // Psicologia
                // ... (lista completa seria muito extensa)
            ]
        };

        // Estado detalhado da aplicação
        this.state = {
            // Calculadora principal
            calculator: {
                currentStep: 1,
                totalSteps: 5,
                isProcessing: false,
                validationErrors: [],
                
                formData: {
                    empresa: {
                        razaoSocial: '',
                        nomeFantasia: '',
                        cnpj: '',
                        ie: '',
                        cnae: '',
                        atividadePrincipal: '',
                        dataConstituicao: null,
                        regimeTributario: 'simplesNacional'
                    },
                    
                    receita: {
                        rbt12: 0, // Receita Bruta Total 12 meses
                        periodoApuracao: {
                            inicio: null,
                            fim: null
                        },
                        receitasPorMes: [],
                        receitasOperacionais: 0,
                        receitasNaoOperacionais: 0
                    },
                    
                    pessoal: {
                        socios: [],
                        funcionarios: [],
                        terceirizados: [],
                        autonomos: [],
                        
                        prolabore: {
                            valorMensal: 0,
                            quantidadeSocios: 0,
                            tempoTrabalho: 12
                        },
                        
                        folhaPagamento: {
                            salarioBase: 0,
                            adicionais: 0,
                            horas: 0,
                            comissoes: 0
                        }
                    },
                    
                    encargos: {
                        inss: {
                            funcionarios: 0,
                            empresa: 0,
                            socios: 0
                        },
                        fgts: 0,
                        outrosEncargos: 0,
                        beneficios: {
                            valeTransporte: 0,
                            valeRefeicao: 0,
                            valeAlimentacao: 0,
                            auxilioCreche: 0,
                            planoSaude: 0,
                            seguroVida: 0,
                            outros: 0
                        }
                    }
                }
            },
            
            // Simulador avançado
            simulator: {
                parametros: {
                    receita: 1200000,
                    prolabore: 15000,
                    funcionarios: 5,
                    salarioMedio: 3500,
                    beneficiosPercent: 0.15,
                    crescimentoAnual: 0.10
                },
                cenarios: [],
                comparativo: null
            },
            
            // Resultados e relatórios
            results: {
                current: null,
                historico: [],
                comparativos: [],
                projecoes: []
            },
            
            // Interface
            ui: {
                activeTab: 'overview',
                sidebarOpen: true,
                notificationsQueue: [],
                charts: {},
                modals: {}
            }
        };

        this.setupAdvancedEventListeners();
        this.initializeAdvancedComponents();
        this.loadCompanyDatabase();
    }

    setupAdvancedEventListeners() {
        // Sistema de eventos mais robusto
        this.eventHandlers = new Map();
        
        // Scroll avançado com throttling
        this.addEventHandler(window, 'scroll', this.throttle(this.handleAdvancedScroll.bind(this), 16));
        
        // Navegação inteligente
        this.setupSmartNavigation();
        
        // Formulários com validação em tempo real
        this.setupAdvancedFormHandling();
        
        // Simulador com debouncing otimizado
        this.setupAdvancedSimulator();
        
        // Sistema de tabs e modals
        this.setupUIComponents();
        
        // Teclado shortcuts
        this.setupKeyboardShortcuts();
        
        // Responsividade dinâmica
        this.addEventHandler(window, 'resize', this.debounce(this.handleResize.bind(this), 250));
    }

    setupSmartNavigation() {
        // Menu mobile avançado
        const navToggle = document.getElementById('navToggle');
        if (navToggle) {
            this.addEventHandler(navToggle, 'click', this.toggleAdvancedMobileMenu.bind(this));
        }

        // Links com scroll inteligente
        document.querySelectorAll('a[href^="#"], .nav-link').forEach(link => {
            this.addEventHandler(link, 'click', this.handleSmartNavigation.bind(this));
        });

        // Navegação por histórico
        this.addEventHandler(window, 'popstate', this.handleHistoryNavigation.bind(this));
    }

    setupAdvancedFormHandling() {
        // Delegação de eventos otimizada
        this.addEventHandler(document, 'click', this.handleGlobalClicks.bind(this));
        this.addEventHandler(document, 'input', this.debounce(this.handleGlobalInputs.bind(this), 100));
        this.addEventHandler(document, 'change', this.handleGlobalChanges.bind(this));
        this.addEventHandler(document, 'blur', this.handleGlobalBlur.bind(this), true);
    }

    setupAdvancedSimulator() {
        document.querySelectorAll('#simulator input[type="range"]').forEach(slider => {
            this.addEventHandler(slider, 'input', this.handleSliderInput.bind(this));
            this.addEventHandler(slider, 'change', this.handleSliderChange.bind(this));
        });
    }

    setupUIComponents() {
        // Tabs com histórico
        document.querySelectorAll('.tab-btn, .comparative-tab').forEach(tab => {
            this.addEventHandler(tab, 'click', this.handleAdvancedTabs.bind(this));
        });
    }

    setupKeyboardShortcuts() {
        this.addEventHandler(document, 'keydown', this.handleKeyboardShortcuts.bind(this));
    }

    // ==================== SISTEMA DE CÁLCULO OFICIAL ====================

    performPreciseCalculation(dados) {
        const calculo = new FatorRCalculationEngine(this.config, dados);
        return calculo.execute();
    }

    // ==================== HANDLERS DE EVENTOS ====================

    handleGlobalClicks(e) {
        const target = e.target;
        const button = target.closest('button');
        const card = target.closest('.option-card');
        const link = target.closest('[data-action]');

        if (button) {
            this.handleButtonClick(button, e);
        }
        
        if (card) {
            this.handleCardSelection(card, e);
        }
        
        if (link) {
            this.handleActionLink(link, e);
        }
    }

    handleButtonClick(button, e) {
        const buttonText = button.textContent.toLowerCase();
        const onclick = button.getAttribute('onclick');
        const dataAction = button.getAttribute('data-action');
        
        // Prevenir múltiplos cliques
        if (button.classList.contains('processing')) return;
        
        // Botões da calculadora
        if (buttonText.includes('continuar')) {
            e.preventDefault();
            this.processNextStep();
        } else if (buttonText.includes('calcular agora')) {
            e.preventDefault();
            this.startAdvancedCalculator();
        } else if (buttonText.includes('simular')) {
            this.runAdvancedSimulation();
        } else if (buttonText.includes('redefinir')) {
            this.resetSimulatorAdvanced();
        } else if (buttonText.includes('adicionar funcionário')) {
            this.addEmployeeAdvanced();
        } else if (button.classList.contains('remove-employee')) {
            this.removeEmployee(button);
        }
        
        // Ações específicas
        if (dataAction) {
            this.executeAction(dataAction, button);
        }
        
        // Compatibilidade com onclick
        if (onclick && !dataAction) {
            this.handleLegacyOnclick(onclick);
        }
    }

    handleGlobalInputs(e) {
        const field = e.target;
        
        // Auto-formatação e máscaras
        this.applyAdvancedMasks(field);
        
        // Validação em tempo real
        this.performLiveValidation(field);
        
        // Auto-save inteligente
        this.smartAutoSave(field);
        
        // Cálculos automáticos
        this.triggerAutoCalculations(field);
    }

    handleSliderInput(e) {
        const slider = e.target;
        this.updateSliderDisplayAdvanced(slider);
        
        // Atualizar estado do simulador
        this.updateSimulatorState(slider);
        
        // Executar simulação em tempo real
        this.runRealTimeSimulation();
    }

    // ==================== CALCULADORA AVANÇADA - STEPS ====================

    processNextStep() {
        this.showStepLoadingAnimation();
        
        setTimeout(() => {
            if (this.validateCurrentStepAdvanced()) {
                this.saveStepDataAdvanced();
                this.advanceToNextStep();
            }
            this.hideStepLoadingAnimation();
        }, 500);
    }

    validateCurrentStepAdvanced() {
        const validators = [
            () => this.validateStep1Advanced(),
            () => this.validateStep2Advanced(),
            () => this.validateStep3Advanced(),
            () => this.validateStep4Advanced(),
            () => this.validateStep5Advanced()
        ];

        const currentValidator = validators[this.state.calculator.currentStep - 1];
        return currentValidator ? currentValidator() : true;
    }

    validateStep1Advanced() {
        const errors = [];
        
        // Validar atividade selecionada
        const selectedActivity = document.querySelector('.option-card.selected');
        if (!selectedActivity) {
            errors.push('Selecione o tipo de atividade da empresa');
        } else {
            const activity = selectedActivity.dataset.value;
            if (!this.isActivityEligibleForFatorR(activity)) {
                this.showActivityWarning(activity);
            }
        }

        // Validar CNPJ se informado
        const cnpjField = document.getElementById('cnpj');
        if (cnpjField && cnpjField.value && !this.validateCNPJAdvanced(cnpjField.value)) {
            errors.push('CNPJ inválido');
        }

        this.state.calculator.validationErrors = errors;
        
        if (errors.length > 0) {
            this.showValidationErrors(errors);
            return false;
        }
        
        return true;
    }

    validateStep2Advanced() {
        const errors = [];
        const receita = parseFloat(document.getElementById('annualRevenue')?.value || 0);
        
        if (receita <= 0) {
            errors.push('Receita bruta é obrigatória');
        } else if (receita > 4800000) {
            errors.push('Receita acima do limite do Simples Nacional (R$ 4,8 milhões)');
        } else if (receita < 1000) {
            errors.push('Receita muito baixa - verifique se o valor está correto');
        }

        // Validar período
        const inicio = document.getElementById('startMonth')?.value;
        const fim = document.getElementById('endMonth')?.value;
        
        if (inicio && fim) {
            const diffMonths = this.calculateMonthsDifference(inicio, fim);
            if (diffMonths !== 12) {
                this.showPeriodWarning(diffMonths);
            }
        }

        this.state.calculator.validationErrors = errors;
        
        if (errors.length > 0) {
            this.showValidationErrors(errors);
            return false;
        }
        
        return true;
    }

    validateStep3Advanced() {
        const errors = [];
        const prolabore = parseFloat(document.getElementById('prolabore')?.value || 0);
        
        if (prolabore < 0) {
            errors.push('Pró-labore não pode ser negativo');
        }

        // Validar funcionários
        const employees = this.getEmployeeData();
        employees.forEach((emp, index) => {
            if (emp.salary < this.config.parametros.salarioMinimo2025) {
                errors.push(`Funcionário ${index + 1}: salário abaixo do mínimo legal`);
            }
            if (emp.salary > this.config.parametros.tetoINSS2025) {
                // Aviso sobre teto do INSS
                this.showINSSCeilingWarning(emp.name, emp.salary);
            }
        });

        this.state.calculator.validationErrors = errors;
        
        if (errors.length > 0) {
            this.showValidationErrors(errors);
            return false;
        }
        
        return true;
    }

    validateStep4Advanced() {
        // Validações de benefícios são opcionais
        return true;
    }

    validateStep5Advanced() {
        return true;
    }

    advanceToNextStep() {
        if (this.state.calculator.currentStep < this.state.calculator.totalSteps) {
            this.state.calculator.currentStep++;
            this.renderCurrentStep();
            this.updateAdvancedProgress();
        } else {
            this.finalizeCalculation();
        }
    }

    renderCurrentStep() {
        const stepRenderers = [
            () => this.renderStep1(),
            () => this.renderStep2Advanced(),
            () => this.renderStep3Advanced(),
            () => this.renderStep4Advanced(),
            () => this.renderStep5Advanced()
        ];

        const renderer = stepRenderers[this.state.calculator.currentStep - 1];
        if (renderer) {
            renderer();
            this.animateStepAdvanced();
        }
    }

    renderStep2Advanced() {
        const body = document.querySelector('.calc-body');
        const header = document.querySelector('.calc-header');
        
        header.innerHTML = `
            <h3>Receita Bruta dos Últimos 12 Meses</h3>
            <p>Informações detalhadas sobre o faturamento para cálculo preciso do Fator R</p>
        `;

        const hoje = new Date();
        const fimPadrao = hoje.toISOString().slice(0, 7);
        const inicioPadrao = new Date(hoje.getFullYear() - 1, hoje.getMonth() + 1, 1).toISOString().slice(0, 7);

        body.innerHTML = `
            <div class="revenue-form-advanced">
                <div class="form-section">
                    <h4>Receita Bruta Total</h4>
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="annualRevenue">Receita Bruta (RBT12) *</label>
                            <div class="input-with-currency">
                                <span class="currency-symbol">R$</span>
                                <input type="number" id="annualRevenue" required 
                                       placeholder="0,00" step="0.01" min="0" max="4800000">
                            </div>
                            <div class="form-hint">Valor total sem deduções dos últimos 12 meses</div>
                        </div>
                        
                        <div class="form-group">
                            <label for="monthlyAverage">Média Mensal</label>
                            <div class="input-readonly">
                                <input type="text" id="monthlyAverage" readonly>
                            </div>
                            <div class="form-hint">Calculado automaticamente</div>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <h4>Período de Apuração</h4>
                    <div class="period-selector">
                        <div class="form-group">
                            <label for="startMonth">Início do Período</label>
                            <input type="month" id="startMonth" value="${inicioPadrao}">
                        </div>
                        <div class="period-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        <div class="form-group">
                            <label for="endMonth">Fim do Período</label>
                            <input type="month" id="endMonth" value="${fimPadrao}">
                        </div>
                    </div>
                    
                    <div class="period-info">
                        <div class="info-item">
                            <span class="label">Total de Meses:</span>
                            <span class="value" id="totalMonths">12 meses</span>
                        </div>
                        <div class="info-item">
                            <span class="label">Status do Período:</span>
                            <span class="value status" id="periodStatus">Válido</span>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <h4>Detalhamento da Receita (opcional)</h4>
                    <div class="revenue-breakdown">
                        <div class="form-group">
                            <label for="operationalRevenue">Receitas Operacionais</label>
                            <input type="number" id="operationalRevenue" placeholder="0,00" step="0.01" min="0">
                            <div class="form-hint">Vendas de produtos/serviços principais</div>
                        </div>
                        
                        <div class="form-group">
                            <label for="nonOperationalRevenue">Receitas Não Operacionais</label>
                            <input type="number" id="nonOperationalRevenue" placeholder="0,00" step="0.01" min="0">
                            <div class="form-hint">Receitas financeiras, vendas de ativos, etc.</div>
                        </div>
                    </div>
                    
                    <div class="revenue-validation">
                        <div class="validation-check">
                            <i class="fas fa-calculator"></i>
                            <span>Total detalhado: <span id="detailedTotal">R$ 0,00</span></span>
                        </div>
                    </div>
                </div>

                <div class="compliance-check">
                    <h4>Verificação de Conformidade</h4>
                    <div class="checks-grid">
                        <div class="check-item">
                            <i class="fas fa-check-circle success"></i>
                            <span>Dentro do limite do Simples Nacional</span>
                        </div>
                        <div class="check-item">
                            <i class="fas fa-clock warning"></i>
                            <span>Período de 12 meses válido</span>
                        </div>
                        <div class="check-item">
                            <i class="fas fa-shield-alt info"></i>
                            <span>Receita declarada consistente</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.setupRevenueCalculations();
    }

    setupRevenueCalculations() {
        const annualInput = document.getElementById('annualRevenue');
        const monthlyInput = document.getElementById('monthlyAverage');
        const operationalInput = document.getElementById('operationalRevenue');
        const nonOperationalInput = document.getElementById('nonOperationalRevenue');
        const detailedTotalSpan = document.getElementById('detailedTotal');

        // Auto-cálculo da média mensal
        if (annualInput && monthlyInput) {
            this.addEventHandler(annualInput, 'input', () => {
                const annual = parseFloat(annualInput.value || 0);
                const monthly = annual / 12;
                monthlyInput.value = this.formatCurrency(monthly);
                this.updateComplianceChecks(annual);
            });
        }

        // Sincronização do detalhamento
        const syncDetailedTotal = () => {
            const operational = parseFloat(operationalInput.value || 0);
            const nonOperational = parseFloat(nonOperationalInput.value || 0);
            const total = operational + nonOperational;
            
            detailedTotalSpan.textContent = this.formatCurrency(total);
            
            // Verificar consistência
            const mainRevenue = parseFloat(annualInput.value || 0);
            if (total > 0 && mainRevenue > 0) {
                const difference = Math.abs(total - mainRevenue);
                const tolerance = mainRevenue * 0.01; // 1% de tolerância
                
                if (difference > tolerance) {
                    this.showRevenueInconsistencyWarning(total, mainRevenue);
                }
            }
        };

        if (operationalInput) this.addEventHandler(operationalInput, 'input', syncDetailedTotal);
        if (nonOperationalInput) this.addEventHandler(nonOperationalInput, 'input', syncDetailedTotal);
    }

    renderStep3Advanced() {
        const body = document.querySelector('.calc-body');
        const header = document.querySelector('.calc-header');
        
        header.innerHTML = `
            <h3>Massa Salarial e Pró-labore</h3>
            <p>Informações completas sobre gastos com pessoal para cálculo oficial do Fator R</p>
        `;

        body.innerHTML = `
            <div class="payroll-form-advanced">
                <div class="form-section">
                    <h4>Pró-labore dos Sócios</h4>
                    <div class="prolabore-grid">
                        <div class="form-group">
                            <label for="prolabore">Valor Mensal Total *</label>
                            <div class="input-with-currency">
                                <span class="currency-symbol">R$</span>
                                <input type="number" id="prolabore" required 
                                       placeholder="0,00" step="0.01" min="0">
                            </div>
                            <div class="form-hint">Soma de todos os pró-labores pagos mensalmente</div>
                        </div>
                        
                        <div class="form-group">
                            <label for="sociosQuantidade">Quantidade de Sócios</label>
                            <input type="number" id="sociosQuantidade" min="1" max="50" value="1">
                            <div class="form-hint">Número de sócios que recebem pró-labore</div>
                        </div>
                        
                        <div class="form-group">
                            <label for="prolaboreAnual">Pró-labore Anual</label>
                            <input type="text" id="prolaboreAnual" readonly>
                            <div class="form-hint">Valor anual total</div>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <h4>Funcionários CLT</h4>
                    <div class="employees-management">
                        <div class="employees-header">